import { Component, OnInit } from '@angular/core';
import {TaskDataService} from './task-data.service';
import { Task } from './task';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit{

  tasks: Task[] = [];
  newTask: Task = new Task();
  
  public ngOnInit() {
    this.taskDataService
      .getAllTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
        }
      );
  }
  
  constructor(private taskDataService: TaskDataService) {
  }

  onToggleTaskDone(task) {
    this.taskDataService.
    toggleTaskDone(task).
    subscribe(
      (updatedTask) => {
        task = updatedTask;
      }
    );
  }

  onAddTask(task: Task) {
    this.taskDataService
    .addTask(task)
    .subscribe(
      (newTask) => {
        this.tasks = this.tasks.concat(newTask);
      }
    );
  }

  onRemoveTask(task) {
    this.taskDataService.
    deleteTaskById(task.TaskId)
    .subscribe(
      (_) => {
        this.tasks = this.tasks.filter((t) => t.TaskId !== task.TaskId);
      }
    );
  }
}
