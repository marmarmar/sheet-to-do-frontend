import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TaskCategory} from '../interfaces/task-category';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ActualTaskCategoryService {
  private currentTaskCategorySource = new BehaviorSubject<TaskCategory>(null);
  currentTaskCategory: Observable<TaskCategory> = this.currentTaskCategorySource.asObservable();

  constructor() {
  }

  changeTaskCategory(taskCategory: TaskCategory) {
    this.currentTaskCategorySource.next(taskCategory);
  }

}
