import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ManufactureOrder, MFGORDERSTATE, Product } from 'src/openapi';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map } from 'rxjs/operators';
import { ManufactureOrderQueryInput, MFG_ORDER_STATE } from '__generated__/globalTypes';
import { ManufactureTrackingLogSearchCommand, ManufactureTrackingLogsService } from 'src/openapi';
@Component({
  selector: 'app-autoliv-report',
  templateUrl: './autoliv-report.component.html',
  styleUrl: './autoliv-report.component.less'
})
export class AutolivReportComponent implements OnInit {
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public moUrl: string = '';
  public mtUrl: string = '';
  public form: UntypedFormGroup = this.fb.group({
    log_number_search: [null,],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private msg: NzMessageService,
    private apollo: Apollo,
    private mtlService: ManufactureTrackingLogsService,
  ) {
  }

  ngOnInit(): void {
    
      console.log(window.location.href);
  }

  public onGetMos(mo: Array<ManufactureOrder> | null): void {
    if (mo)
    {
      console.log(mo);
      this.moUrl = "https://erp.sz-icnc.com/admin/mes/mfg-order?id=" + mo[0].id;
    }
  }

  public onClickSearchButton(): void {
    const cmd: ManufactureTrackingLogSearchCommand = {
      log_number_search: this.form.value.log_number_search,
    }
    this.mtlService.apiManufactureTrackingLogsSearchLogsPost(cmd).subscribe((x) => {
      if (x != null)
        this.mtUrl = "https://erp.sz-icnc.com/admin/mes/mfg-tracking?id=" + x;
    });
  }

}
