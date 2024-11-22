import { Pipe, PipeTransform } from '@angular/core';
import { MATERIAL } from 'src/openapi';

@Pipe({
  name: 'materialLabel',
})
export class MaterialLabelPipe implements PipeTransform {
  transform(value: MATERIAL): string {
    switch (value) {
      case MATERIAL.AlloySteel:
        return '合金钢';
      case MATERIAL.Aluminum:
        return '铝';
      case MATERIAL.BearingSteel:
        return '轴承钢';
      case MATERIAL.CarbonSteel:
        return '碳钢';
      case MATERIAL.Copper:
        return '碳钢';
      case MATERIAL.FreeCuttingSteel:
        return '易切削钢';
      case MATERIAL.LowCarbonSteel:
        return '低碳钢';
      case MATERIAL.NonMetal:
        return '低碳钢';
      case MATERIAL.RustlessIron:
        return '不锈铁';
      case MATERIAL.StainlessSteel:
        return '不锈钢';
      case MATERIAL.UnKnown:
        return '未知';
      default:
        throw new Error(`arg out of range ${value}`);
    }
  }
}
