import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from 'src/openapi';

@Pipe({
  name: 'currencyLabel',
})
export class CurrencyLabelPipe implements PipeTransform {
  transform(v: Currency): string {
    switch (v) {
      case Currency.Eur:
        return '欧元';
      case Currency.Usd:
        return '美元';
      case Currency.Rmb:
        return '人民币';
      default:
        throw new Error('argument out of range');
    }
  }
}
