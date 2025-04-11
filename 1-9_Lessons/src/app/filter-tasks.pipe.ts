import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: string[], query: string): string[] {
    return tasks.filter(task => task.includes(query));
  }

}
