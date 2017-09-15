import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../task";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{


  @Input()
  tasks: Task[];

  @Output()
  remove: EventEmitter<Task> = new EventEmitter();

  @Output()
  toggleDone: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  onToggleTaskDone(task: Task) {
    this.toggleDone.emit(task);
  }

  onRemoveTask(task: Task) {
    this.remove.emit(task);
  }

}
