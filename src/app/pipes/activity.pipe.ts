import { Pipe, PipeTransform } from '@angular/core';
import { strict } from 'assert';

@Pipe({
  name: 'activity'
})
export class ActivityPipe implements PipeTransform {

  transform(value: string): string {
    let activity = ''
    switch(value) {

      case 'add':
        activity = 'Added'
        break;

      case 'edit':
        activity = 'Edited'
        break;

      default: 
        activity = 'Modified'
        break;
    }
    
    return activity;
  }

}
