import { User } from "./user";
import { Task } from "./task";

export class TaskCategory {
    TaskCategoryId: number;
    Name: string = '';
    User: User;
    Tasks: Array<Task>;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}