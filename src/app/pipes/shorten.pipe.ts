import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{

    transform(value:any, expectedLength: number){

        if (value.length > expectedLength) {
            return value.slice(0,expectedLength) + '...';
        }

        return value;
    }

}