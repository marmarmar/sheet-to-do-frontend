import {Component, Input, OnInit} from '@angular/core';
import {ActualTaskCategoryService} from '../../services/actual-task-category.service';
import {TaskCategory} from '../../interfaces/task-category';

@Component({
  selector: 'app-task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css']
})
export class TaskCategoryComponent implements OnInit {
  @Input() public taskCategory: TaskCategory;

  constructor(private actualTaskCategory: ActualTaskCategoryService) { }

  ngOnInit() {
  }

  public changeTaskCategory(): void {
    this.actualTaskCategory.changeTaskCategory(this.taskCategory);
  }

}
