import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByCount'
})
export class SortByCountPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.sort((n1, n2) =>{
      return n2.count - n1.count;
    });
  }

}
