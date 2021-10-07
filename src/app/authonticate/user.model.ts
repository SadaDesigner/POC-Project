export class User {
    constructor(
        public email: string,
        public localId: string,
        public token: string,
        private expirationDate: Date

        ) {}
}