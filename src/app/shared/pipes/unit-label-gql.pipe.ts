import { Pipe, PipeTransform } from '@angular/core';
import { UNIT } from '__generated__/globalTypes';

@Pipe({
  name: 'unitLabelGql',
})
export class UnitLabelGqlPipe implements PipeTransform {
  transform(value?: UNIT): string {
    switch (value) {
      case UNIT.KG:
        return '公斤(kg)';
      case UNIT.L:
        return '升(L)';
      case UNIT.PCS:
        return '件(pcs)';
      default:
        throw new Error('argument out of range');
    }
  }
}
