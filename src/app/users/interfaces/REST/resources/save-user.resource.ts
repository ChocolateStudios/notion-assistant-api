import { ApiProperty } from "@nestjs/swagger";

export class SaveUserResource {

    @ApiProperty()
    public username: string;
    @ApiProperty()
    public email: string;
    @ApiProperty()
    public password: string;

    // constructor(
    //     username:string,
    //     email:string,
    //     password:string
    // ) {
    //     this.username = username;
    //     this.email = email;
    //     this.password = password;
    // }
}
