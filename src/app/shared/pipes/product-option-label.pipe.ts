import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/openapi';

@Pipe({
  name: 'productOptionLabel',
})
export class ProductOptionLabelPipe implements PipeTransform {
  transform(p: Product, verbose: boolean = false): string {
    return verbose ? `${p.aliases} ${p.name}` : `${p.name}`;
  }
}
