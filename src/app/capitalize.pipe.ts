import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    
    let firstChar=value.substring(0,1)
    let restString= value.substring(1,value.length)

    let newString = firstChar.toUpperCase()+restString.toLowerCase();
    return newString;
  }

}
