export class UserLogged {
    constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
    ) { }
}