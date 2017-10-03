import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllTasks(): Observable<Task[]> {
    return Observable.of([
      new Task({Id: 1, Title: 'Read article', Done: false})
    ]);
  }

  public createTask(task: Task): Observable<Task> {
    return Observable.of(
      new Task({Id: 1, Title: 'Read article', Done: false})
    );
  }

  public getTaskById(taskId: number): Observable<Task> {
    return Observable.of(
      new Task({id: 1, Title: 'Read article', Done: false})
    );
  }

  public updateTask(task: Task): Observable<Task> {
    return Observable.of(
      new Task({Id: 1, Title: 'Read article', Done: false})
    );
  }

  public deleteTaskById(taskId: number): Observable<null> {
    return null;
  }
}
