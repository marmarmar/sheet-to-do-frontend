import { User } from './user';
import { TaskCategory } from './task-category';

export class Task {
    taskId: number;
    title: string;
    dueDate: Date;
    description: string;
    done: boolean;
    user: User;
    taskCategory: TaskCategory;
    isArchived: boolean;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
