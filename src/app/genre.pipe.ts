import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: String, ...args: String[]): unknown {
    let genre = '';

    if(value.includes('speed')) {
      genre = 'Action';
    } else if(value.includes('escape')){
      genre = 'Action';
    } else if(value.includes('family')) {
      genre = 'Drama';
    } else if(value.includes('happy')) {
      genre = 'Drama';
    } else if(value.includes('matrix')) {
      genre = 'Science-Fiction';
    } else if(value.includes('space')) {
      genre = 'Science-Fiction';
    }
    return genre;
  }

}
