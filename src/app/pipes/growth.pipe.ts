import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'growth'
})
export class GrowthPipe implements PipeTransform {

  transform(value: any, power?: any): any {
    console.log("value "+value);
    console.log("args "+power);
    if(power == '')
    return value;
    else return value ** power
  }

}
