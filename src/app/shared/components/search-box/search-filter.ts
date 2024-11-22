export interface SearchFilter {
  customerId?: string;
  supplierId?: string;
  productIds?: Array<string>;
  materialIds: Array<string>;
  dateRange?: Date[];
}
