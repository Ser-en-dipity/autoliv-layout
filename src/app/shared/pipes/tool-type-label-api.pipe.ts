import { Pipe, PipeTransform } from '@angular/core';
import { TOOLTYPE } from 'src/openapi';

@Pipe({
  name: 'toolTypeLabelApi',
})
export class ToolTypeLabelApiPipe implements PipeTransform {
  transform(value: TOOLTYPE): string {
    // return null;
    switch (value) {
      case TOOLTYPE.ZhUJia: {
        return '主夹';
      }
      case TOOLTYPE.BeIJia: {
        return '背夹';
      }
      case TOOLTYPE.DaOBing: {
        return '刀柄';
      }
      case TOOLTYPE.DaOPian: {
        return '刀片';
      }
      case TOOLTYPE.DaOTao: {
        return '导套';
      }
      case TOOLTYPE.JiaODao: {
        return '铰刀';
      }
      case TOOLTYPE.JiATou: {
        return '夹头';
      }
      case TOOLTYPE.LiaOJia: {
        return '料夹';
      }
      case TOOLTYPE.PeIJian: {
        return '配件';
      }
      case TOOLTYPE.SIGong: {
        return '丝攻';
      }
      case TOOLTYPE.TanGDao: {
        return '镗刀';
      }
      case TOOLTYPE.ToolHolder: {
        return '刀柄';
      }
      case TOOLTYPE.XIDao: {
        return '铣刀';
      }
      case TOOLTYPE.ZuaNTou: {
        return '钻头';
      }

      default:
        return 'N/A';
    }
  }
}
