import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-category-default',
  templateUrl: './task-category-default.component.html',
  styleUrls: ['./task-category-default.component.css']
})
export class TaskCategoryDefaultComponent implements OnInit {
  @Input() public taskCategoryDefaultName: string;

  constructor() { }

  ngOnInit() {
  }

  public changeTaskCategory() {
    this.taskCategoryDefaultName = 'Bigooos';
  }
}
