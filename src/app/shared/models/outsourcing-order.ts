import { AcctOption, Asset, OsState, PROCESSINGTYPE, UNIT } from 'src/openapi';
import { Supplier } from './supplier';

export class OutsourcingOrder {
  id?: string;
  orderNumber?: string;
  isClosed = false;
  isRework = false;
  acct?: AcctOption;
  supplierId?: string;
  supplier?: Supplier;
  creationTime?: Date;

  state: OsState = OsState.Started;

  items: Array<OutsourcingOrderItem> = [];

  constructor(obj: Partial<OutsourcingOrder>) {
    Object.assign(this, obj);
  }
}

export class OutsourcingOrderItem {
  id?: string;
  index = 0;

  process?: PROCESSINGTYPE;

  assetSrc?: Asset;
  assetDst?: Asset;

  description?: string;

  unitOfCharge: UNIT = UNIT.Pcs;
  unitPrice?: number;
  quantityOfCharge?: number;

  quantity?: number;
  quantityBalanced?: number;
  unit?: UNIT;

  /**
   *
   */
  constructor(obj: Partial<OutsourcingOrderItem>) {
    Object.assign(this, obj);
  }
}
