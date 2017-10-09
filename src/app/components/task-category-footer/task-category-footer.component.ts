import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {TaskCategory} from '../../models/task-category';

@Component({
  selector: 'app-task-category-footer',
  templateUrl: './task-category-footer.component.html',
  styleUrls: ['./task-category-footer.component.css']
})
export class TaskCategoryFooterComponent implements OnInit{
  newTaskCategory: TaskCategory = new TaskCategory();

  @Output()
  add: EventEmitter<TaskCategory> = new EventEmitter();

  constructor() { }
  addTaskCategory() {
    this.add.emit(this.newTaskCategory);
    this.newTaskCategory = new TaskCategory();
  }
  ngOnInit() {
  }
}
