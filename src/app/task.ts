export class Task {
    TaskId: number;
    Title: string = '';
    DueDate: Date;
    Description: string = '';
    Done: boolean = false;
    User: User;
    // TaskCategory: TaskCategory;
    IsArchived: boolean = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
