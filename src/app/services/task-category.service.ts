import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TaskCategory} from '../models/task-category';
import {environment} from '../../environments/environment';

@Injectable()
export class TaskCategoryService {
  taskCategoryApiUrl = environment.apiUrl + 'taskCategories';

  constructor(private http: Http) { }

  public getTaskCategories(): Observable<TaskCategory[]> {
    return this.http.get(this.taskCategoryApiUrl + '?userId=1')
      .map(response => response.json() as TaskCategory[])
      .catch(this.handleError);
  }

  public addTaskCategory(taskCategory: TaskCategory): Observable<TaskCategory> {
    return this.http.post(this.taskCategoryApiUrl + '?userId=1', taskCategory)
      .map(response => {
        return new TaskCategory(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('TaskCategoryService::handleError', error);
    return Observable.throw(error);
  }

}
