import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TaskCategory} from '../models/task-category';

@Injectable()
export class ActualTaskCategoryService {
  private messageSource = new BehaviorSubject<TaskCategory>(null);
  currentTaskCategory = this.messageSource.asObservable();

  constructor() { }

  changeTaskCategory(taskCategory: TaskCategory) {
    this.messageSource.next(taskCategory);
  }

}
