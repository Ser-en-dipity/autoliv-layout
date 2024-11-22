import { STOCK_TYPE } from '__generated__/globalTypes';

export function MapStockType(t: STOCK_TYPE): string {
  switch (t) {
    case STOCK_TYPE.OUTSOURCING:
      return '委外加工';
    case STOCK_TYPE.FINISHED_PRODUCT:
      return '产成品';
    case STOCK_TYPE.DEFECTIVE_PRODUCT:
      return '不良品';
    case STOCK_TYPE.GAUGE:
      return '量具';
    case STOCK_TYPE.TOOLS:
      return '刀具';
    case STOCK_TYPE.INACTIVE_STOCK:
      return '呆滞库存';
    case STOCK_TYPE.MACHINE:
      return '机器';
    case STOCK_TYPE.MATERIAL:
      return '原材料';
    case STOCK_TYPE.PACKAGE_MATERIAL:
      return '包装材料';
    case STOCK_TYPE.SEMI_FINISHED_PRODUCT:
      return '半成品';
    case STOCK_TYPE.ASSEMBLE:
      return '组装';
    case STOCK_TYPE.UFO:
      return 'UFO';
    case STOCK_TYPE.MFG_BUFFER:
      return '待生产入库';
    case STOCK_TYPE.AUTOLIV:
      return '奥托立夫专用';
    default:
      return t;
  }
}
