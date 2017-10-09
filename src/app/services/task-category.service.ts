import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TaskCategoryCustom} from '../models/task-category-custom';
import {environment} from '../../environments/environment';
import {TaskCategory} from '../interfaces/task-category';
import {TaskCategoryDate} from '../models/task-category-date';
import {TaskCategoryAll} from '../models/task-category-all';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import * as moment from 'moment';

@Injectable()
export class TaskCategoryService {
  taskCategoryApiUrl = environment.apiUrl + 'taskCategories';

  constructor(private http: Http) { }

  public getTaskCategories(): Observable<TaskCategory[]> {
    const taskCategoryAll = this.getAllCategory();
    const taskCategoriesCustom = this.getCustomTaskCategories();
    const taskCategoriesDate = this.getDateTaskCategories();

    return Observable.forkJoin(taskCategoryAll, taskCategoriesCustom, taskCategoriesDate)
      .map(result => {
        const allCategory = result[0];
        const customCategories = result[1];
        const defaultCategories = result[2];
        return (<TaskCategory[]>allCategory).concat(defaultCategories).concat(customCategories);
      }
    );
  }

  private getDateTaskCategories(): Observable<TaskCategoryDate[]> {
    const today = moment().format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
    const week = moment()
      .hours(23).minutes(59).seconds(59)
      .add(7, 'days')
      .format('YYYY-MM-DD HH:mm:ss');

    return Observable.of([
      new TaskCategoryDate('Today', today, today),
      new TaskCategoryDate('Tomorrow', tomorrow, tomorrow),
      new TaskCategoryDate('Week', today, week)
    ]);
  }

  private getAllCategory(): Observable<TaskCategoryAll[]> {
    return Observable.of([
      new TaskCategoryAll('All tasks')
    ]);
  }

  private getCustomTaskCategories(): Observable<TaskCategoryCustom[]> {
    return this.http.get(this.taskCategoryApiUrl + '?userId=1')
      .map(response => {
        return response.json().map(data => new TaskCategoryCustom(data));
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('TaskCategoryService::handleError', error);
    return Observable.throw(error);
  }

}
