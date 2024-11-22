import { Pipe, PipeTransform } from '@angular/core';
import { FINISH } from 'src/openapi';

@Pipe({
  name: 'finishLabel',
})
export class FinishLabelPipe implements PipeTransform {
  transform(value: FINISH): string {
    switch (value) {
      case FINISH.Blacken:
        return '黑化';
      case FINISH.BlackenNylokPatch:
        return '黑化奈落';
      case FINISH.Blunt:
        return '钝化';
      case FINISH.GrindWithAntiRustOil:
        return '研磨涂防锈油';
      case FINISH.HexavalentColorZinc:
        return '六价彩锌';
      case FINISH.HexavalentWhiteZinc:
        return '六价白锌';
      case FINISH.Nature:
        return '本色';
      case FINISH.NatureWithAntiRustOil:
        return '本色涂防锈油';
      case FINISH.NickelPlatingRohs:
        return '镀环保镍';
      case FINISH.NylokPatch:
        return '奈落';
      case FINISH.PaintBlack:
        return '涂黑';
      case FINISH.PaintGray:
        return '涂灰';
      case FINISH.PaintRed:
        return '涂红';
      case FINISH.Qpq:
        return 'QPQ';
      case FINISH.Sandblasting:
        return '喷砂';
      case FINISH.Silver:
        return '镀银';
      case FINISH.TrivalentBlackZincRohs:
        return '三价环保黑锌';
      case FINISH.TrivalentColorZincRohs:
        return '三价环保彩锌';
      case FINISH.TrivalentWhiteZincRohs:
        return '三价环保白锌';
      case FINISH.WhiteZincNylokPatch:
        return '白锌奈落';
      default:
        throw new Error(`arg out of range ${value}`);
    }
  }
}
