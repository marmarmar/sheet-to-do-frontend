import { User } from './user';
import { Task } from './task';

export class TaskCategory {
    taskCategoryId: number;
    name: string;
    user: User;
    tasks: Array<Task>;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
