import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetTypeLabel',
})
export class AssetTypeLabelPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Product':
        return '产成品';
      case 'SemiFinishedProduct':
        return '半成品';
      case 'Tool':
        return '刀具';
      case 'RawMaterial':
        return '原材料';
      default:
        return '一般物料';
    }
  }
}
