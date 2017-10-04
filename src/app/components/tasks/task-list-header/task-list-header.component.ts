import { Component, Input } from '@angular/core';
import { Task } from "../../../models/task";

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent  {

  constructor() { }

  @Input()
  tasks: Task[];

}
