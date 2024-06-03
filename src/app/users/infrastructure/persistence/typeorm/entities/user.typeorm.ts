import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AccountTypeORM } from '../value-objects/account.typeorm';

@Entity('users')
export class UserTypeORM {
    @PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        name: 'id',
        unsigned: true,
    })
    id: number;

    @Column((type) => AccountTypeORM, { prefix: false })
    public account: AccountTypeORM;
}