import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task';

@Pipe({
  name: 'tasksTitleFilter'
})
export class TasksTitleFilterPipe implements PipeTransform {

  public transform (items, filterText) {
    const regex = new RegExp(filterText, 'i');
    return items.filter(
      product => product.title.match(regex));;
  }

  private filterProducts (filterText: string, task: Task) {
    if (!filterText.length) {
      return true;
    } else {
      return task.title.toString().toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1;
    }
  }

}
