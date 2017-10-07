import { Component, OnInit, TemplateRef } from '@angular/core';
import {TaskDataService} from '../../services/task-data.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [],
})
export class TasksComponent implements OnInit{

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
      (toggleTaskDone) => {
        task = toggleTaskDone;
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

  onUpdateTask(task) {
    this.taskDataService.
    updateTask(task).
    subscribe(
      (updatedTask) => {
        task = updatedTask;
      }
    );
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
