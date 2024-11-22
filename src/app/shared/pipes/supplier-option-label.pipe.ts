import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from 'src/openapi';

@Pipe({
  name: 'supplierOptionLabel',
})
export class SupplierOptionLabelPipe implements PipeTransform {
  transform(s: Supplier): string {
    return `${s.code} ${s.supplierName}`;
  }
}
