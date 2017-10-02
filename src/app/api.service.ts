import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  // API: GET /tasks
  public getAllTasks(): Observable<Task[]> {
      return this.http.get(API_URL + 'tasks?userId=1')
    .map(response => {
      const tasks = response.json();
      return tasks.map((task) => new Task(task));
    })
    .catch(this.handleError);
  }

  // API: POST /tasks
  public createTask(task: Task): Observable<Task> {
    return this.http
    .post(API_URL + 'tasks', task)
    .map(response => {
      return new Task(response.json());
    })
    .catch(this.handleError);
  }

  // API: GET /tasks/:id
  public getTaskById(taskId: number): Observable<Task> {
    return this.http
    .get(API_URL + 'tasks/' + taskId)
    .map(response => {
      return new Task(response.json());
    })
    .catch(this.handleError);
  }

  // API: PUT /tasks/:id
  public updateTask(task: Task): Observable<Task> {
    return this.http
    .put(API_URL + 'tasks/' + task.taskId, task)
    .map(response => {
      return new Task(response.json());
    })
    .catch(this.handleError);
  }


  // API: PATCH /tasks/:id
  public archiveTask(task: Task): Observable<Task> {
      return this.http
          .patch(API_URL + 'tasks/' + task.taskId, [{ op: 'replace', path: 'isArchived', value: true }])
          .map(response => null)
          .catch(this.handleError);
  }

  // DELETE /tasks/:id
  public deleteTaskById(taskId: number): Observable<null> {
    return this.http
    .delete(API_URL + 'tasks/' + taskId)
    .map(response => null)
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
