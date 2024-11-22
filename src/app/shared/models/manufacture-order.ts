import { Shift, UNIT } from 'src/openapi';

export class ManufactureOrder {
  id?: string;
  orderNumber?: string;
  productId?: string;
  productName?: string;
  productPicUrl?: string;
  orderItemId?: string;
  manufactureNumber?: number;

  logEntries?: Array<ManufactureLogEntry>;
  consumeEntries?: Array<ManufactureConsumeEntry>;
  /**
   *
   */
  constructor(obj: Partial<ManufactureOrder>) {
    Object.assign(this, obj);
  }
}

export class ManufactureLogEntry {
  shift?: Shift;
  weight?: number;
  number?: number;
  productId?: string;
  productName?: string;
}

export class ManufactureConsumeEntry {
  batchId?: string;
  assetId?: string;
  assetName?: string;
  serialNumber?: string;
  quantity?: number;
  unitPrice?: number;
  unit?: UNIT;

  /**
   *
   */
  constructor(obj: Partial<ManufactureConsumeEntry>) {
    Object.assign(this, obj);
  }
}
