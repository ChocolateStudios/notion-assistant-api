export class LoginUserCommand {
    constructor(
        public readonly username: string | null,
        public readonly email: string | null,
        public readonly password: string,
    ) { }
}