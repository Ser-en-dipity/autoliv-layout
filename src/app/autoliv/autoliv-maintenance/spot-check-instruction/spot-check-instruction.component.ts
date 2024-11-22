import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { GetAutolivSpotCheckInstruction } from './__generated__/GetAutolivSpotCheckInstruction';
import { GET_AUTOLIV_SPOT_CHECK_INSTRUCTION } from './get_spot_check_instruction';
@Component({
  selector: 'app-spot-check-instruction',
  templateUrl: './spot-check-instruction.component.html',
  styleUrl: './spot-check-instruction.component.less'
})
export class SpotCheckInstructionComponent implements OnInit {
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
    this.apollo.query<GetAutolivSpotCheckInstruction>({
      query: GET_AUTOLIV_SPOT_CHECK_INSTRUCTION,
      variables: {
        id: this.productId
      }
    }).subscribe(
      result => {
        this.pdfSrc = result?.data?.core?.product?.spotInstruction?.url ?? '';
      },
      error => {
        this.msg.error(error);
      }
    );
  }
}
