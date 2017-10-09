import {Component, Input, OnInit} from '@angular/core';
import {CurrentTaskCategoryService} from '../../services/current-task-category.service';
import {TaskCategory} from '../../interfaces/task-category';

@Component({
  selector: 'app-task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css']
})
export class TaskCategoryComponent implements OnInit {
  @Input() public taskCategory: TaskCategory;

  constructor(private currentTaskCategoryService: CurrentTaskCategoryService) { }

  ngOnInit() {
  }

  public changeTaskCategory(): void {
    this.currentTaskCategoryService.changeTaskCategory(this.taskCategory);
  }

}
