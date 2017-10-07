import { Component, OnInit } from '@angular/core';
import {TaskCategoryService} from '../../services/task-category.service';
import {TaskCategory} from '../../models/task-category';

@Component({
  selector: 'app-task-category-list',
  templateUrl: './task-category-list.component.html',
  styleUrls: ['./task-category-list.component.css']
})
export class TaskCategoryListComponent implements OnInit {
  taskCategories: TaskCategory[] = [];
  newTaskCategory: TaskCategory = new TaskCategory();

  allTasksCategoryName: string;
  todayCategoryName: string;
  tomorrowCategoryName: string;
  weekCategoryName: string;

  constructor(private taskCategoryService: TaskCategoryService) {
    this.allTasksCategoryName = 'All';
    this.todayCategoryName = 'Today';
    this.tomorrowCategoryName = 'Tomorrow';
    this.weekCategoryName = 'Week';
  }

  getTaskCategories(): void {
    this.taskCategoryService
      .getTaskCategories()
      .subscribe(
        (taskCategories) => {
          this.taskCategories = taskCategories;
        }
      );
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
