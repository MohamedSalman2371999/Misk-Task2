import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillterByRegion',
  standalone: true
})
export class FillterByRegionPipe implements PipeTransform {
  transform(arrOfObject: any[], text: string): any[] {

    return arrOfObject.filter((item) => item.region.toLowerCase().includes(text.toLowerCase()));
  }

}
