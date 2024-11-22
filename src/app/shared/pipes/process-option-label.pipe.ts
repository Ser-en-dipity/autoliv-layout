import { Pipe, PipeTransform } from '@angular/core';
import { PROCESSINGTYPE } from 'src/openapi';

@Pipe({
  name: 'processOptionLabel',
})
export class ProcessOptionLabelPipe implements PipeTransform {
  transform(value: PROCESSINGTYPE): string {
    switch (value) {
      case PROCESSINGTYPE.Raw:
        return '本色';
      case PROCESSINGTYPE.Blacken:
        return '发黑';
      case PROCESSINGTYPE.Bonderizing:
        return '磷化';
      case PROCESSINGTYPE.NickelPlate:
        return '镀镍';
      case PROCESSINGTYPE.HeatTreatment:
        return '热处理';
      case PROCESSINGTYPE.WedMLs:
        return '慢走丝';
      case PROCESSINGTYPE.WedMHs:
        return '快走丝';
      case PROCESSINGTYPE.MatteTin:
        return '镀雾锡';
      case PROCESSINGTYPE.GoldPlating:
        return '镀金';
      case PROCESSINGTYPE.SilverPlating:
        return '镀银';
      case PROCESSINGTYPE.ElectrolessNickelPlating:
        return '镀化学镍';
      case PROCESSINGTYPE.TrivalentColorZincPlating:
        return '镀三价彩锌';
      case PROCESSINGTYPE.Turning:
        return '车削';
      case PROCESSINGTYPE.Chamfer:
        return '倒角';
      case PROCESSINGTYPE.Grind:
        return '研磨';
      case PROCESSINGTYPE.Milling:
        return '铣边';
      case PROCESSINGTYPE.Spraying:
        return '喷涂';
      case PROCESSINGTYPE.Blunt:
        return '钝化';
      case PROCESSINGTYPE.ZincNickelAlloyPlating:
        return '镀锌镍合金';
      case PROCESSINGTYPE.HexavalentColorZincPlating:
        return '镀六价彩锌';
      case PROCESSINGTYPE.ThreadForming:
        return '滚牙';
      case PROCESSINGTYPE.Qpq:
        return 'QPQ';
      case PROCESSINGTYPE.YellowZincPlating:
        return '镀黄锌';
      case PROCESSINGTYPE.WhiteZincPlating:
        return '镀白锌';
      case PROCESSINGTYPE.BlackZincPlating:
        return '镀黑锌';
      case PROCESSINGTYPE.BrightZincPlating:
        return '镀亮锡';
      case PROCESSINGTYPE.Assemble:
        return '组装';
      case PROCESSINGTYPE.Dispensing:
        return '点胶';

      default:
        throw new Error(`Argument Out of Range ${value}`);
    }
  }
}
