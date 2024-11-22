import { AcctOption, ORDERSTATE } from 'src/openapi';

export class Order {
  orderNumber!: string;
  customerId!: string;
  customerName!: string;
  acct!: AcctOption;
  state!: ORDERSTATE;
  remark?: string;

  items!: Array<OrderItem>;

  constructor(obj: Partial<Order>) {
    Object.assign(this, obj);
  }
}

export class OrderItem {
  index!: number;
  unitPrice!: number;
  quantity!: number;
  productId!: string;
  productName!: string;
  deadline!: Date;
  customerOrderNumber!: string;
  remark?: string;
  /**
   *
   */
  constructor(obj: Partial<OrderItem>) {
    Object.assign(this, obj);
  }
}
