import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromResourceName'
})
export class FromResourceNamePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.split('-')
      .map((word: string) => `${word.slice(0,1).toUpperCase()}${word.slice(1)}`)
      .join(' ') : '';
  }

}
