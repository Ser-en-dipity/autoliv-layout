import { Pipe, PipeTransform } from '@angular/core';
import { TOOL_TYPE } from '__generated__/globalTypes';

@Pipe({
  name: 'toolTypeLabelGql',
})
export class ToolTypeLabelGqlPipe implements PipeTransform {
  transform(value?: TOOL_TYPE): string {
    switch (value) {
      case TOOL_TYPE.ZHU_JIA: {
        return '主夹';
      }
      case TOOL_TYPE.BEI_JIA: {
        return '背夹';
      }
      case TOOL_TYPE.DAO_BING: {
        return '刀柄';
      }
      case TOOL_TYPE.DAO_PIAN: {
        return '刀片';
      }
      case TOOL_TYPE.DAO_TAO: {
        return '导套';
      }
      case TOOL_TYPE.JIAO_DAO: {
        return '铰刀';
      }
      case TOOL_TYPE.JIA_TOU: {
        return '夹头';
      }
      case TOOL_TYPE.LIAO_JIA: {
        return '料夹';
      }
      case TOOL_TYPE.PEI_JIAN: {
        return '配件';
      }
      case TOOL_TYPE.SI_GONG: {
        return '丝攻';
      }
      case TOOL_TYPE.TANG_DAO: {
        return '镗刀';
      }
      case TOOL_TYPE.TOOL_HOLDER: {
        return '刀柄';
      }
      case TOOL_TYPE.TOOL_HOLDER: {
        return '刀柄';
      }
      case TOOL_TYPE.XI_DAO: {
        return '铣刀';
      }
      case TOOL_TYPE.ZUAN_TOU: {
        return '钻头';
      }

      case TOOL_TYPE.UN_KNOWN: {
        return 'N/A';
      }
      default:
        return 'N/A';
    }
  }
}
