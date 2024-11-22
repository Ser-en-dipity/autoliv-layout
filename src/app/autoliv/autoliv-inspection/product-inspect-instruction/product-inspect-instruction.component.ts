import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { GET_PRODUCT_INSPECTION } from './get_product_inspect_instruction';
import { GetProductInspection } from './__generated__/GetProductInspection';

@Component({
  selector: 'app-product-inspect-instruction',
  templateUrl: './product-inspect-instruction.component.html',
  styleUrl: './product-inspect-instruction.component.less'
})
export class ProductInspectInstructionComponent implements OnInit {
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public pdfSrc = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apollo: Apollo,
    private msg: NzMessageService,
    private view: ViewContainerRef,
  ) { }

  ngOnInit(){
    this.apollo.query<GetProductInspection>({
      query: GET_PRODUCT_INSPECTION,
      variables: {
        id: this.productId
      }
    }).subscribe(
      result => {
        this.pdfSrc = result?.data?.core?.product?.productInspection?.url ?? '';
      },
      error => {
        this.msg.error(error);
      }
    );
  }
}
