import { Pipe, PipeTransform } from '@angular/core';
import { ASSET_TYPE } from '__generated__/globalTypes';

@Pipe({
  name: 'assetTypeLabel2',
})
export class AssetTypeLabel2Pipe implements PipeTransform {
  transform(value: ASSET_TYPE): string {
    switch (value) {
      case ASSET_TYPE.GAUGE:
        return '量具';
      case ASSET_TYPE.OIL:
        return '油品';
      case ASSET_TYPE.ZAKA:
        return '杂项';
      case ASSET_TYPE.PRODUCT:
        return '产成品';
      case ASSET_TYPE.RAW_MATERIAL:
        return '原材料';
      case ASSET_TYPE.SEMI_FINISHED_PRODUCT:
        return '半成品';
      case ASSET_TYPE.TOOL:
        return '刀具';
      default:
        return '一般物料';
    }
  }
}
