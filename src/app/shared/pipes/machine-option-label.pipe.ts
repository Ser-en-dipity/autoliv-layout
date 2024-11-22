import { Pipe, PipeTransform } from '@angular/core';
import { Machine } from 'src/openapi';

@Pipe({
  name: 'machineOptionLabel'
})
export class MachineOptionLabelPipe implements PipeTransform {
  transform(m: Machine): string {
    if (m.brand != 'N/A')
      return `${m.brand} ${m.code}`;
    else return `${m.code}`;
  }

}
