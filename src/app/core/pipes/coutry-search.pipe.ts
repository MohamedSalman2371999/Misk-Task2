import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coutrySearch',
  standalone: true
})
export class CoutrySearchPipe implements PipeTransform {

  transform(arrOfObject: any[], text: string): any[] {

    return arrOfObject.filter((item) => item.name.common.toLowerCase().includes(text.toLowerCase()));
  }


}
