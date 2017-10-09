import {TaskCategory} from '../interfaces/task-category';

export class TaskCategoryCustom implements TaskCategory {
    taskCategoryId: number;
    name: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  getType(): string {
    return TaskCategoryCustom.name;
  }
}
