import {Component, OnInit} from '@angular/core';
import {TaskCategory} from '../../../interfaces/task-category';
import {ActualTaskCategoryService} from '../../../services/actual-task-category.service';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent  implements OnInit {
  taskCategory: TaskCategory;

  ngOnInit(): void {
    this.actualTaskCategory.currentTaskCategory.subscribe(taskCategory => this.taskCategory = taskCategory);
  }

  constructor(private actualTaskCategory: ActualTaskCategoryService) { }
}
