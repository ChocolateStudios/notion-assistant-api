import { Column } from 'typeorm';

export class AccountTypeORM {
    @Column('varchar', { name: 'username', nullable: false, unique: false })
    public username: string;
    @Column('varchar', { name: 'password', nullable: false, unique: true })
    public password: string;
    @Column('varchar', { name: 'email', nullable: false, unique: true })
    public email: string;

    private constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    
    public static from(
        username: string,
        password: string,
        email: string,
    ): AccountTypeORM {
        return new AccountTypeORM(username, password, email);
    }
}