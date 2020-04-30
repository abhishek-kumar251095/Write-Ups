import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateStr'
})
export class DateStrPipe implements PipeTransform {

  transform(value: any): Date {

    let finalStr = '';
    let date = new Date(value.year, value.month, value.date);

    return date;
  }

}
