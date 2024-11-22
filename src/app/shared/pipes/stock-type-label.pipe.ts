import { Pipe, PipeTransform } from '@angular/core';
import { STOCK_TYPE } from '__generated__/globalTypes';
import { MapStockType } from '../extensions/map-stock-type';

@Pipe({
  name: 'stockTypeLabel',
})
export class StockTypeLabelPipe implements PipeTransform {
  transform(st: STOCK_TYPE): string {
    return MapStockType(st);
  }
}
