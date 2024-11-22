import { Pipe, PipeTransform } from '@angular/core';
import { SearchOption } from '../components/search-box/search-option.enum';

@Pipe({
  name: 'searchOptionLabel',
})
export class SearchOptionLabelPipe implements PipeTransform {
  transform(option: SearchOption): string {
    switch (option) {
      case SearchOption.Customer:
        return '客户';
      case SearchOption.Order:
        return '订单';
      case SearchOption.Product:
        return '产品';
      default:
        throw new Error('argument out of range');
    }
  }
}
