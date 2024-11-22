import { Component, Input, OnInit, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { STOCK_TYPE } from '__generated__/globalTypes';
import { GET_BATCH_DETAIL_OF_ASSET } from './asset_stock_detail';
import { GetBatchDetailOfAsset } from './__generated__/GetBatchDetailOfAsset';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

interface BatchDetail {
  expand: boolean;
  assetId: string;
  assetName: string;
  entryTime: Date;
  serialNumber: string;
  quantity: number;
  records: Array<StockRecord>;
}
interface StockRecord {
  stockCode: string;
  quantity: number;
}
interface AssetData {
  assetId: string
}

@Component({
  selector: 'app-asset-stock-detail-modal',
  templateUrl: './asset-stock-detail-modal.component.html',
  styleUrls: ['./asset-stock-detail-modal.component.less'],
})
export class AssetStockDetailModalComponent implements OnInit {
  // @Input()
  // public assetId?: string;

  public batchTableData: Array<BatchDetail> = [];
  public batchTableOfSemis: Array<Array<BatchDetail>> = [[]];

  constructor(private apollo: Apollo,
    @Inject(NZ_MODAL_DATA) private assetData: AssetData
  ) {}

  ngOnInit(): void {
    if (this.assetData.assetId) {
      this.apollo
        .query<GetBatchDetailOfAsset>({
          query: GET_BATCH_DETAIL_OF_ASSET,
          variables: { id: this.assetData.assetId },
          fetchPolicy: 'no-cache',
        })
        .pipe(map((x) => x.data.core?.product))
        .subscribe((product) => {
          this.batchTableData =
            product?.activeBatches?.map((batch) => {
              const rs: Array<StockRecord> = [];
              // Object.values(STOCK_TYPE).forEach((type) => {
              //   if (
              //     batch?.stockDetails?.some((x) => x.stockCell.type === type)
              //   ) {
              //     const quantityOfType = batch?.stockDetails
              //       ?.filter((x) => x.stockCell.type === type)
              //       .map((x) => x.quantity)
              //       .reduce((a, b) => a + b);
              //     const r: StockRecord = {
              //       stockType: type,
              //       quantity: quantityOfType,
              //     };
              //     rs.push(r);
              //   }
              // });
              batch?.stockDetails?.forEach(sd => {
                const r: StockRecord = {
                  stockCode: sd.stockCell.name,
                  quantity: sd.quantity
                }
                rs.push(r)
              });
              console.log(this.batchTableData)

              const batchDetail: BatchDetail = {
                expand: false,
                assetId: product.id,
                assetName: product.name,
                serialNumber: batch?.serialNumber!,
                entryTime: new Date(batch?.entryTime),
                quantity: rs.map((x) => x.quantity).reduce((a, b) => a + b),
                records: rs,
              };
              return batchDetail;
            }) ?? [];

          this.batchTableOfSemis = product?.semis.map((semi) => {
            const batches =
              semi.activeBatches?.map((batch) => {
                const rs: Array<StockRecord> = [];
                // Object.values(STOCK_TYPE).forEach((type) => {
                //   if (
                //     batch?.stockDetails?.some((x) => x.stockCell.type === type)
                //   ) {
                //     const quantityOfType = batch?.stockDetails
                //       ?.filter((x) => x.stockCell.type === type)
                //       .map((x) => x.quantity)
                //       .reduce((a, b) => a + b);
                //     const r: StockRecord = {
                //       stockType: type,
                //       quantity: quantityOfType,
                //     };
                //     rs.push(r);
                //   }
                // });
                batch?.stockDetails?.forEach(sd => {
                  const r: StockRecord = {
                    stockCode: sd.stockCell.name,
                    quantity: sd.quantity
                  }
                  rs.push(r)
                });

                const batchDetail: BatchDetail = {
                  expand: false,
                  assetId: product.id,
                  assetName: product.name,
                  serialNumber: batch?.serialNumber!,
                  entryTime: new Date(batch?.entryTime),
                  quantity: rs.map((x) => x.quantity).reduce((a, b) => a + b),
                  records: rs,
                };
                return batchDetail;
              }) ?? [];
            return batches;
          }) ?? [[]];
        });
    }
  }
}
