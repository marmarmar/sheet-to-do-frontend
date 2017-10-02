import { Component, OnInit } from '@angular/core';
import {TaskDataService} from './task-data.service';
import { Task } from './models/task';

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
   this.getAllTasks();
  }

  constructor(private taskDataService: TaskDataService) {
  }

  getAllTasks() {
    this.taskDataService
    .getAllTasks()
    .subscribe(
      (tasks) => {
        this.tasks = tasks;
      }
    );
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
    deleteTaskById(task.taskId)
    .subscribe(
      (_) => {
        this.tasks = this.tasks.filter((t) => t.taskId !== task.taskId);
      }
    );
  }

  onUpdateTask(task) {
    this.taskDataService.
    updateTask(task).
    subscribe(
      (updatedTask) => {
        task = updatedTask;
      }
    );
    console.log('hello')
  }

  onArchiveTask(task) {
      this.taskDataService
          .archiveTask(task)
          .subscribe(
          (archiveTask) => {
              task = archiveTask;
              this.getAllTasks();
          }
      );

  }

}
