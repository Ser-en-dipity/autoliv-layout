import { Pipe, PipeTransform } from '@angular/core';
import { MATERIALSHAPE } from 'src/openapi';

@Pipe({
  name: 'shapeLabelApi',
})
export class ShapeLabelApiPipe implements PipeTransform {
  transform(value: MATERIALSHAPE): string {
    switch (value) {
      case MATERIALSHAPE.Sheet:
        return '板材';
      case MATERIALSHAPE.HexagonBar:
        return '六角棒';
      case MATERIALSHAPE.RoundBar:
        return '圆棒';
      case MATERIALSHAPE.RoundPipe:
        return '圆管';
      case MATERIALSHAPE.Other:
        return '异形';
      case MATERIALSHAPE.Spherical:
        return '球';
      case MATERIALSHAPE.HexagonPipe:
        return '六角管';
      case MATERIALSHAPE.SquarePipe:
        return '方管';
      case MATERIALSHAPE.SquareBar:
        return '方棒';
      case MATERIALSHAPE.MillCoil:
        return '盘圆';
      default:
        throw new Error(`arg out of range ${value}`);
    }
  }
}
