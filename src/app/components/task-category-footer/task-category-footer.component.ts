import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {TaskCategoryCustom} from '../../models/task-category-custom';

@Component({
  selector: 'app-task-category-footer',
  templateUrl: './task-category-footer.component.html',
  styleUrls: ['./task-category-footer.component.css']
})
export class TaskCategoryFooterComponent implements OnInit{
  newTaskCategory: TaskCategoryCustom = new TaskCategoryCustom();

  @Output()
  add: EventEmitter<TaskCategoryCustom> = new EventEmitter();

  constructor() { }
  addTaskCategory() {
    this.add.emit(this.newTaskCategory);
    this.newTaskCategory = new TaskCategoryCustom();
  }
  ngOnInit() {
  }
}
