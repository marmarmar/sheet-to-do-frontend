import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksTitleFilter'
})
export class TasksTitleFilterPipe implements PipeTransform {

  public transform (items, filterText) {
    const regex = new RegExp(filterText, 'i');
    return items.filter(
      task => task.title.match(regex)
    );
  }

}
