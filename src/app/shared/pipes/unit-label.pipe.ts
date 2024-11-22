import { Pipe, PipeTransform } from '@angular/core';
import { UNIT } from 'src/openapi';

@Pipe({
  name: 'unitLabel',
})
export class UnitLabelPipe implements PipeTransform {
  transform(value?: UNIT): string {
    switch (value) {
      case UNIT.Kg:
        return '公斤(kg)';
      case UNIT.L:
        return '升(L)';
      case UNIT.Pcs:
        return '件(pcs)';
      default:
        throw new Error('argument out of range');
    }
  }
}
