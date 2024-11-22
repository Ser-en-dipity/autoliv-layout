import { Pipe, PipeTransform } from '@angular/core';
import { PoState } from 'src/openapi';

@Pipe({
  name: 'poStateLabel'
})
export class PoStateLabelPipe implements PipeTransform {

  transform(value: PoState): string {
    switch (value) {
      case PoState.Approved:
        return '已核准';
      case PoState.Cancelled:
        return '已取消';
      case PoState.Closed:
        return '已关闭';
      case PoState.WaitingForApprovement:
        return '待核准';
      default:
        throw new Error(`arg out of range ${value}`);
    };
  }

}
