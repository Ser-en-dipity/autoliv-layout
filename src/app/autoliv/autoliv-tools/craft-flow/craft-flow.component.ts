import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GET_CRAFT_FLOW } from './get_craft_flow';
import { GetCraftFlow } from './__generated__/GetCraftFlow';

@Component({
  selector: 'app-craft-flow',
  templateUrl: './craft-flow.component.html',
  styleUrl: './craft-flow.component.less'
})
export class CraftFlowComponent implements OnInit {
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
    this.apollo.query<GetCraftFlow>({
      query: GET_CRAFT_FLOW,
      variables: {
        id: this.productId
      }
    }).subscribe(
      result => {
        this.pdfSrc = result?.data?.core?.product?.flowDoc?.url ?? '';
      },
      error => {
        this.msg.error(error);
      }
    );
  }
}
