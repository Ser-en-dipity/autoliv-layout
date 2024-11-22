import { Pipe, PipeTransform } from '@angular/core';
import { RAW } from 'src/openapi';

@Pipe({
  name: 'rawLabelApi',
})
export class RawLabelApiPipe implements PipeTransform {
  transform(value: RAW): string {
    switch (value) {
      case RAW.AlloySteel:
        return '合金钢';
      case RAW.Aluminum:
        return '铝';
      case RAW.CarbonSteel:
        return '碳钢';
      case RAW.Casting:
        return '铸件';
      case RAW.Copper:
        return '铜';
      case RAW.NonMetal:
        return '非金属';
      case RAW.StainlessSteel:
        return '不锈钢';
      default:
        throw new Error(`arg out of range ${value}`);
    }
  }
}
