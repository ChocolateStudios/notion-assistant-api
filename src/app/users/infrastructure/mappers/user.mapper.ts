import { User } from "../../domain/models/entities/user.entity";
import { UserTypeORM } from "../persistence/typeorm/entities/user.typeorm";
import { AccountTypeORM } from "../persistence/typeorm/value-objects/account.typeorm";


export class UserMapper {
  public static toTypeORM(user: User): UserTypeORM {
    const userTypeORM: UserTypeORM = new UserTypeORM();

    userTypeORM.account = AccountTypeORM.from(
      user.getAccount().getUsername(),
      user.getAccount().getPassword(),
      user.getAccount().getEmail(),
    );

    return userTypeORM;
  }
}