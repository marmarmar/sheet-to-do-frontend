import { Injectable } from '@angular/core';
import {Task} from './task';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskDataService {

  constructor(private api: ApiService) {
  }

  addTask(task: Task): Observable<Task> {
    return this.api.createTask(task);
  }

  deleteTaskById(taskId: number): Observable<Task>{
    return this.api.deleteTaskById(taskId);
  }

  updateTask(task: Task): Observable<Task> {
    return this.api.updateTask(task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.api.getAllTasks();
  }

  getTaskById(taskId: number): Observable<Task> {
    return this.api.getTaskById(taskId);
  }

  toggleTaskDone(task: Task){
    task.Done=!task.Done;
    return this.api.updateTask(task);
  }
}
