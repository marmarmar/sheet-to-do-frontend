import { Component, OnInit, TemplateRef } from '@angular/core';
import {TaskDataService} from '../../services/task-data.service';
import { Task } from '../../models/task';
import {CurrentTaskCategoryService} from '../../services/current-task-category.service';
import {TaskCategory} from '../../interfaces/task-category';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [],
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  currentTaskCategory: TaskCategory;

  public filterText: string;

  public ngOnInit() {
    this.currentTaskCategoryService.taskCategory.subscribe(taskCategory => {
      this.currentTaskCategory = taskCategory;
      this.getTasksByCategory(taskCategory);
    });
  }

  constructor(
    private taskDataService: TaskDataService,
    private currentTaskCategoryService: CurrentTaskCategoryService) {
  }

  getTasksByCategory(taskCategory: TaskCategory): void {
    if (this.currentTaskCategory !== taskCategory) {
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
              this.getTasksByCategory(this.currentTaskCategory);
          }
      );
  }

  onFilterChange(newFilter: string) {
    this.filterText = newFilter;
    this.getTasksByCategory(this.currentTaskCategory);
  }
}
