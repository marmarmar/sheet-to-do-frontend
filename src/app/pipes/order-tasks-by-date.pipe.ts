import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task';

@Pipe({
  name: 'orderByDate'
})
export class OrderTasksByDatePipe implements PipeTransform {

  transform(tasks: Task[]): any {
    return tasks.sort((a, b) => this.compareTasksDate(a, b));
  }

  private compareTasksDate(a, b): number {
    if ( a.dueDate < b.dueDate ) {
      return -1;
    }
    if ( a.dueDate > b.dueDate ) {
      return 1;
    }
    return 1;
  }

}
