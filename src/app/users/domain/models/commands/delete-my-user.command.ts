export class DeleteUserCommand {
    constructor(
        public readonly username: string | null,
        public readonly email: string | null,
    ) { }
}