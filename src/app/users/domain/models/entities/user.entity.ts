import { AggregateRoot } from '@nestjs/cqrs';
import { UserId } from '../value-objects/user-id.value';
import { Account } from '../value-objects/account.value';

export class User extends AggregateRoot {
  protected id: UserId;
  protected readonly account: Account;
  
  public constructor(account: Account) {
    super();
    this.account = account;
  }
  public getId(): UserId {
    return this.id;
  }
  public getAccount(): Account {
    return this.account;
  }
  public changeId(id: UserId) {
    this.id = id;
  }
}