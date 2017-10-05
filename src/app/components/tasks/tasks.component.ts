import { Component, OnInit, TemplateRef } from '@angular/core';
import {TaskDataService} from '../../services/task-data.service';
import { Task } from '../../models/task';
import {ActualTaskCategoryService} from '../../services/actual-task-category.service';
import {TaskCategory} from '../../models/task-category';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [],
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  newTask: Task = new Task();
  taskCategory: TaskCategory;

  public ngOnInit() {
    // this.actualTaskCategory.currentTaskCategory.subscribe(taskCategory => this.taskCategory = taskCategory);
    this.actualTaskCategory.currentTaskCategory.subscribe(taskCategory => this.getTasksByCategory(taskCategory));

    // this.getAllTasks();
    // this.getTasksByCategory();
  }

  constructor(
    private taskDataService: TaskDataService,
    private actualTaskCategory: ActualTaskCategoryService) {
  }

  getTasksByCategory(taskCategory: TaskCategory): void {
    if (taskCategory === null) {
      this.getAllTasks();
    } else {
      this.taskDataService
        .getTasksByCustomCategory(taskCategory)
        .subscribe(
          (tasks) => {
            this.tasks = tasks;
          }
        );
    }
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
