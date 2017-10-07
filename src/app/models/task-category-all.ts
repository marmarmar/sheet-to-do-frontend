import {TaskCategory} from '../interfaces/task-category';

export class TaskCategoryAll implements TaskCategory {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getType(): string {
    return TaskCategoryAll.name;
  }
}
