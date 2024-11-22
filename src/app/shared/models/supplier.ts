export class Supplier {
  id!: string;
  code!: string;
  supplierName!: string;

  /**
   *
   */
  constructor(obj: Partial<Supplier>) {
    Object.assign(this, obj);
  }
}
