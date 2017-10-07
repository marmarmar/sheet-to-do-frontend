import {TaskCategory} from '../interfaces/task-category';

export class TaskCategoryDate implements TaskCategory {
  name: string;
  startDate: string;
  endDate: string;

  constructor(name: string, startDate: string, endDate: string) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  getType(): string {
    return TaskCategoryDate.name;
  }
}
