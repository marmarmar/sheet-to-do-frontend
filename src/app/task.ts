export class Task {
    Id: number;
    Title: string = '';
    Done: boolean = false;
    Description: string = '';
    DueDate: Date;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
