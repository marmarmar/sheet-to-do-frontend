export class Task {
    taskId: number;
    title: string;
    dueDate: Date;
    description: string;
    done: boolean;
    user: any;
    taskCategory: any;
    isArchived: boolean;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
