import { Pipe, PipeTransform } from '@angular/core';
import { PoState } from 'src/openapi';

@Pipe({
  name: 'stateLabel2',
})
export class StateLabel2Pipe implements PipeTransform {
  transform(value: PoState): string {
    if (value) {
      switch (value) {
        case PoState.Approved:
          return '已批准';
        case PoState.Cancelled:
          return '已取消';
        case PoState.Closed:
          return '已关闭';
        case PoState.WaitingForApprovement:
          return '请求批准';
        default:
          throw new Error('unknown state');
      }
    }
    return '';
  }
}
