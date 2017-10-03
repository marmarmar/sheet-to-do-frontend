export class User {
    userId: number;
    login: string;
    password: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
