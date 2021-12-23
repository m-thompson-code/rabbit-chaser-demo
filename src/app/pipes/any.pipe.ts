import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'any'
})
export class AnyPipe implements PipeTransform {

  transform(value: unknown): any {
    return value;
  }
}
