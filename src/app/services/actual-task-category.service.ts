import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TaskCategory} from '../interfaces/task-category';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CurrentTaskCategoryService {
  private taskCategorySource = new BehaviorSubject<TaskCategory>(null);
  taskCategory: Observable<TaskCategory> = this.taskCategorySource.asObservable();

  constructor() {
  }

  changeTaskCategory(taskCategory: TaskCategory) {
    this.taskCategorySource.next(taskCategory);
  }

}
