import { Pipe, PipeTransform } from '@angular/core';
import { StockChangeType } from '__generated__/globalTypes';

@Pipe({
  name: 'stockChangeType',
})
export class StockChangeTypePipe implements PipeTransform {
  transform(value: StockChangeType): string {
    switch (value) {
      case StockChangeType.CHANGE:
        return '调整';
      case StockChangeType.IN:
        return '入库';
      case StockChangeType.OUT:
        return '出库';
    }
  }
}
