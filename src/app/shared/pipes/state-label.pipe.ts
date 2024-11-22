import { Pipe, PipeTransform } from '@angular/core';
import { PoState } from '__generated__/globalTypes';

@Pipe({
  name: 'stateLabel',
})
export class StateLabelPipe implements PipeTransform {
  transform(value: PoState): string {
    switch (value) {
      case PoState.APPROVED:
        return '已批准';
      case PoState.CLOSED:
        return '已关闭';
      case PoState.CANCELLED:
        return '已取消';
      case PoState.WAITING_FOR_APPROVEMENT:
        return '请求批准';
      default:
        throw new Error('unknown state');
    }
  }
}
