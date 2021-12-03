import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: number, val2: number): unknown {
    console.log("Search pipes...");
    console.log(val2.toExponential);
    return value*8;
  }

}
