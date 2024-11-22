import { Pipe, PipeTransform } from '@angular/core';
import { TaxType } from '__generated__/globalTypes';

@Pipe({
  name: 'taxLabelGql',
})
export class TaxLabelGqlPipe implements PipeTransform {
  transform(tax: TaxType | undefined | null): string {
    switch (tax) {
      case TaxType.N:
        return '未税';
      case TaxType.Y:
        return '含税';
      case TaxType.ZERO:
        return '零税';
      default:
        return '未税';
    }
  }
}
