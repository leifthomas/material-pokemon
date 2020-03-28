import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapText'
})
export class MapTextPipe implements PipeTransform {

  transform(value: string, map: Object): string {
    return map[value] || value;
  }

}
