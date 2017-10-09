import { Component, OnInit } from '@angular/core';
import {TaskCategoryService} from '../../services/task-category.service';
import {TaskCategory} from '../../interfaces/task-category';
import {CurrentTaskCategoryService} from '../../services/current-task-category.service';

@Component({
  selector: 'app-task-category-list',
  templateUrl: './task-category-list.component.html',
  styleUrls: ['./task-category-list.component.css']
})
export class TaskCategoryListComponent implements OnInit {
  taskCategories: TaskCategory[];

  constructor(private taskCategoryService: TaskCategoryService,
              private currentTaskCategoryService: CurrentTaskCategoryService) {
  }

  getTaskCategories(): void {
    this.taskCategoryService
      .getTaskCategories()
      .subscribe(taskCategories => {
        this.taskCategories = taskCategories;
        this.currentTaskCategoryService.changeTaskCategory(taskCategories[1]); // set default category for today
      });
  }

  onAddTaskCategory(taskCategory: TaskCategory) {
    this.taskCategoryService
      .addTaskCategory(taskCategory)
      .subscribe(
        (newTaskCategory) => {
          this.taskCategories = this.taskCategories.concat(newTaskCategory);
        }
      );
  }
  ngOnInit() {
    this.getTaskCategories();
  }
}
