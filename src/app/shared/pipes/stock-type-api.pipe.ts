import { Pipe, PipeTransform } from '@angular/core';
import { STOCKTYPE } from 'src/openapi';

@Pipe({
  name: 'stockTypeApi',
})
export class StockTypeApiPipe implements PipeTransform {
    // PackageMaterial: 'packageMaterial' as STOCKTYPE,
    // DefectiveProduct: 'defectiveProduct' as STOCKTYPE,
    // Tools: 'tools' as STOCKTYPE,
    // InactiveStock: 'inactiveStock' as STOCKTYPE,
    // Gauge: 'gauge' as STOCKTYPE,
    // Material: 'material' as STOCKTYPE,
    // FinishedProduct: 'finishedProduct' as STOCKTYPE,
    // SemiFinishedProduct: 'semiFinishedProduct' as STOCKTYPE,
    // Outsourcing: 'outsourcing' as STOCKTYPE,
    // Machine: 'machine' as STOCKTYPE,
    // Assemble: 'assemble' as STOCKTYPE,
  transform(s: STOCKTYPE): string {
    switch (s) {
      case STOCKTYPE.PackageMaterial: {
        return '包装材料';
      }
      case STOCKTYPE.Tools: {
        return '刀具';
      }
      case STOCKTYPE.InactiveStock: {
        return '呆滞品';
      }
      case STOCKTYPE.Gauge: {
        return '量具';
      }
      case STOCKTYPE.Material: {
        return '原材料';
      }
      case STOCKTYPE.FinishedProduct: {
        return '产成品';
      }
      case STOCKTYPE.DefectiveProduct: {
        return '不良品';
      }
      case STOCKTYPE.Machine: {
        return '机床';
      }
      case STOCKTYPE.Outsourcing: {
        return '委外';
      }
      case STOCKTYPE.SemiFinishedProduct: {
        return '半成品';
      }
      case STOCKTYPE.Assemble: {
        return '组装';
      }
      case STOCKTYPE.MfgBuffer: {
        return '生产缓冲';
      }
      case STOCKTYPE.Ufo: {
        return 'UFO';
      }
      case STOCKTYPE.Autoliv: {
        return '奥托立夫专用';
      }
      default:
        throw new Error('Argument Out of Range');
    }
  }
}
