import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/openapi';

@Pipe({
  name: 'orderSearchLabel',
})
export class OrderSearchLabelPipe implements PipeTransform {
  transform(order: Order): string {
    const date = new Date(order.creationTime!);
    return `${order.customer?.nickName},${
      order.orderNumber
    },${date.toDateString()}`;
  }
}
