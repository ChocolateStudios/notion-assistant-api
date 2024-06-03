import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserCommand } from '../../../domain/models/commands/register-user.command';
import { User } from '../../../domain/models/entities/user.entity';
import { UserFactory } from '../../../domain/models/factories/user.factory';
import { Account } from '../../../domain/models/value-objects/account.value';
import { UserId } from '../../../domain/models/value-objects/user-id.value';
import { UserMapper } from '../../../infrastructure/mappers/user.mapper';
import { UserTypeORM } from '../../../infrastructure/persistence/typeorm/entities/user.typeorm';
import { Repository } from 'typeorm';

@CommandHandler(RegisterUserCommand)
export class RegisterUserCommandHandler
  implements ICommandHandler<RegisterUserCommand>
{
  constructor(
    @InjectRepository(UserTypeORM)
    private userRepository: Repository<UserTypeORM>,
    private publisher: EventPublisher,
  ) { }

  async execute(command: RegisterUserCommand) {
    let userId = 0;

    const accountResult = Account.create(
      command.username,
      command.email,
      command.password,
    );

    if (accountResult.isFailure()) {
      return userId;
    }

    let user: User = UserFactory.createFrom(
      accountResult.value,
    );

    let userTypeORM: UserTypeORM =
      UserMapper.toTypeORM(user);

    try {
      await this.userRepository.save(userTypeORM);

    } catch (error) {
      console.log('ERROR')
      return userId;
      // throw new AppNotification(error.message);
    }

    if (userTypeORM == null) {
      return userId;
    }

    userId = Number(userTypeORM.id);
    user.changeId(UserId.of(userId));
    
    // user = this.publisher.mergeObjectContext(user);
    // user.register();
    // user.commit();

    return userId;
  }
}