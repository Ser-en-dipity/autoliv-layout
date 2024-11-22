import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GET_TOOL_BOM_DOC } from './get_tool_bom_doc';
import { GetToolBomDoc } from './__generated__/GetToolBomDoc';

@Component({
  selector: 'app-tool-bom-doc',
  templateUrl: './tool-bom-doc.component.html',
  styleUrl: './tool-bom-doc.component.less'
})
export class ToolBomDocComponent {
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
    this.apollo.query<GetToolBomDoc>({
      query: GET_TOOL_BOM_DOC,
      variables: {
        id: this.productId
      }
    }).subscribe(
      result => {
        this.pdfSrc = result?.data?.core?.product?.toolBom?.url ?? '';
      },
      error => {
        this.msg.error(error);
      }
    );
  }
}
