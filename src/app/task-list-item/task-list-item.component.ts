import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../task";

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent{
  
    @Input() task: Task;
  
    @Output()
    remove: EventEmitter<Task> = new EventEmitter();
  
    @Output()
    toggleDone: EventEmitter<Task> = new EventEmitter();
  
    constructor() {
    }
  
    toggleTaskDone(task: Task) {
      this.toggleDone.emit(task);
    }
  
    removeTask(task: Task) {
      this.remove.emit(task);
    }
}
