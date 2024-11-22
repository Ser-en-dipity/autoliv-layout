import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { GET_AUTOLIV_DEVICE_OP_BY_ID } from './get_device_op';
import { GetAutolivDeviceOpById } from './__generated__/GetAutolivDeviceOpById';
@Component({
  selector: 'app-device-operation-instruction',
  templateUrl: './device-operation-instruction.component.html',
  styleUrl: './device-operation-instruction.component.less'
})
export class DeviceOperationInstructionComponent implements OnInit {
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
    this.apollo.query<GetAutolivDeviceOpById>({
      query: GET_AUTOLIV_DEVICE_OP_BY_ID,
      variables: {
        id: this.productId
      }
    }).subscribe(
      result => {
        this.pdfSrc = result?.data?.core?.product?.deviceOp?.url ?? '';
      },
      error => {
        this.msg.error(error);
      }
    );
  }
}
