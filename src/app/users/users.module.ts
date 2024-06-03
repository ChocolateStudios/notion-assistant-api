import { Module } from '@nestjs/common';
import { LoginUserController } from './interfaces/REST/controllers/login-user.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeORM } from './infrastructure/persistence/typeorm/entities/user.typeorm';
import { RegisterUserController } from './interfaces/REST/controllers/register-user.controller';
import { RegisterUserCommandHandler } from './application/handlers/commands/register-user.command.handler';
import { UsersService } from './infrastructure/services/users.service';
import { DeleteMyUserController } from './interfaces/REST/controllers/delete-my-user.controller';

export const CommandHandlers = [RegisterUserCommandHandler];
export const EventHandlers = [];
export const QueryHandlers = [];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([UserTypeORM]),
  ],
  exports: [TypeOrmModule],
  controllers: [RegisterUserController, LoginUserController, DeleteMyUserController],
  providers: [
    UsersService,
    ...CommandHandlers,
  ]
})
export class UsersModule { }
