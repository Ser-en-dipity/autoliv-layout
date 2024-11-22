import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PoState, PurchasingOrderItemQueryCommand, Supplier } from 'src/openapi';

@Component({
  selector: 'app-po-search-box-v2',
  templateUrl: './po-search-box-v2.component.html',
  styleUrls: ['./po-search-box-v2.component.less']
})
export class PoSearchBoxV2Component implements OnInit {
  // private _queryParam: PurchasingOrderItemQueryCommand;
  public preSelectedId?: string;

  public get poStateOptions(): ReadonlyArray<PoState> {
    return Array.from(Object.values(PoState));
  }

  public form = this.fb.group({
    // supplier_ids: Array<string>;
    // asset_ids: Array<string>;
    // asset_type?: ASSETTYPE;
    // date_range: Array<string>;
    // include_old: boolean;
    // code_or_name_search?: string | null;
    // order_state?: PoState;

  })


  /**
   *
   */
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }






  public onGetSupplier(e: Supplier) { }

}
