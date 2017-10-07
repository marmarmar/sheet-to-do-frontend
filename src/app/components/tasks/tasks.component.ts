import { Component, OnInit, TemplateRef } from '@angular/core';
import {TaskDataService} from '../../services/task-data.service';
import { Task } from '../../models/task';
import {ActualTaskCategoryService} from '../../services/actual-task-category.service';
import {TaskCategory} from '../../interfaces/task-category';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [],
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  taskCategory: TaskCategory;
  newTask: Task = new Task();

  public ngOnInit() {
    this.actualTaskCategory.currentTaskCategory.subscribe(taskCategory => {
      this.taskCategory = taskCategory;
      this.getTasksByCategory(taskCategory);
    });
  }

  constructor(
    private taskDataService: TaskDataService,
    private actualTaskCategory: ActualTaskCategoryService) {
  }

  getTasksByCategory(taskCategory: TaskCategory): void {
    if (this.taskCategory !== taskCategory) {
      this.tasks = []; // clean up array for a smooth transition
    }
    if (taskCategory != null) {
      this.taskDataService
        .getTasksByCategory(taskCategory)
        .subscribe(tasks => this.tasks = tasks);
    }
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
              this.getTasksByCategory(this.taskCategory);
          }
      );
  }
}
