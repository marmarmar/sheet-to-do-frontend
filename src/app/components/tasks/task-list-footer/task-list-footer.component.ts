import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../models/task';
@Component({
  selector: 'app-task-list-footer',
  templateUrl: './task-list-footer.component.html',
  styleUrls: ['./task-list-footer.component.css']
})
export class TaskListFooterComponent {

  newTask: Task = new Task();

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  addTask() {
    this.add.emit(this.newTask);
    this.newTask = new Task();
  }
}
