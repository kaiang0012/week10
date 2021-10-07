import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let age = 2021 - value
    return age;
  }

}
