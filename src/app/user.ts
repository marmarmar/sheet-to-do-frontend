export class User {
    UserId: number;
    Login: string = '';
    Password: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}