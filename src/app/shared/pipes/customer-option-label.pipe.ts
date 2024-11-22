import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/openapi';

@Pipe({
  name: 'customerOptionLabel',
})
export class CustomerOptionLabelPipe implements PipeTransform {
  transform(c: Customer): string {
    return `${c.code!}  ${c.nickName!}`;
  }
}
