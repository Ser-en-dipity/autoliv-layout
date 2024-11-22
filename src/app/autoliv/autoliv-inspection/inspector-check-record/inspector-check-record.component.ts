import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { GET_INSPECTOR_CHECK_RECORD } from './get_inspector_check_record';
import { GetInspectorCheckRecord } from './__generated__/GetInspectorCheckRecord';
@Component({
  selector: 'app-inspector-check-record',
  templateUrl: './inspector-check-record.component.html',
  styleUrl: './inspector-check-record.component.less'
})
export class InspectorCheckRecordComponent implements OnInit {
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
    this.apollo.query<GetInspectorCheckRecord>({
      query: GET_INSPECTOR_CHECK_RECORD,
      variables: {
        id: this.productId
      }
    }).subscribe(
      result => {
        this.pdfSrc = result?.data?.core?.product?.inspectorCheck?.url ?? '';
      },
      error => {
        this.msg.error(error);
      }
    );
  }
}
