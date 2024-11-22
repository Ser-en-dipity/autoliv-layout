import { Pipe, PipeTransform } from '@angular/core';
import { TaxType } from 'src/openapi';

@Pipe({
  name: 'taxLabel',
})
export class TaxLabelPipe implements PipeTransform {
  transform(value: TaxType): string {
    switch (value) {
      case TaxType.N:
        return '未税';
      case TaxType.Y:
        return '含税';
      case TaxType.Zero:
        return '零税';
      default:
        return '含税';
    }
  }
}
