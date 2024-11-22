import { Pipe, PipeTransform } from '@angular/core';
import { Asset } from 'src/openapi';

@Pipe({
  name: 'assetOptionLabel',
})
export class AssetOptionLabelPipe implements PipeTransform {
  transform(asset: Asset): string {
    return `${asset.code} ${asset.name}`;
  }
}
