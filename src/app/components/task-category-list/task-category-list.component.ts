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
              private actualTaskCategory: CurrentTaskCategoryService) {
  }

  getTaskCategories(): void {
    this.taskCategoryService
      .getTaskCategories()
      .subscribe(taskCategories => {
        this.taskCategories = taskCategories;
        this.actualTaskCategory.changeTaskCategory(taskCategories[1]); // set default category for today
      });
  }

  ngOnInit() {
    this.getTaskCategories();
  }

}
