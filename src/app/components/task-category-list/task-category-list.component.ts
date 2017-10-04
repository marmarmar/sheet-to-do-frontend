import { Component, OnInit } from '@angular/core';
import {TaskCategoryService} from '../../services/task-category.service';
import {TaskCategory} from '../../models/task-category';

@Component({
  selector: 'app-task-category-list',
  templateUrl: './task-category-list.component.html',
  styleUrls: ['./task-category-list.component.css']
})
export class TaskCategoryListComponent implements OnInit {
  taskCategories: TaskCategory[];

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

  ngOnInit() {
    this.getTaskCategories();
  }

}
