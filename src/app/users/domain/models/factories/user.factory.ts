import { User } from '../entities/user.entity';
import { Account } from '../value-objects/account.value';

export class UserFactory {
  public static createFrom(account: Account) {
    return new User(account);
  }
}