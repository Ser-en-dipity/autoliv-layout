import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semiProductLabel',
})
export class SemiProductLabelPipe implements PipeTransform {
  transform(value: string): string {
    // switch(value.processCode.)
    switch (value) {
      case 'R':
        return `热处理`;
      case 'C':
        return `车处理`;
      case 'S':
        return `生产`;
      case 'D':
        return `电镀`;
      default:
        throw new Error('argument out of range');
    }
    // return null;
  }
}
