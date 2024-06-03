export class UserRegistered {
    constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
    ) { }
}