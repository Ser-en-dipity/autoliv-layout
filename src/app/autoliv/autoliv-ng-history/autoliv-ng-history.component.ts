import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { MobileDetectorService } from 'src/app/shared/mobile-detector.service';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HFile, ProductsService, AddDocOfAutolivCommand, DeleteDocOfAutolivCommand  } from 'src/openapi';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UploadHistoryComponent } from './upload-history/upload-history.component';
import { GET_AUTOLIV_NG_HISTORY_BY_ID } from './get_autoliv_ng_history';
import { GetAutolivNgHistoryById } from './__generated__/GetAutolivNgHistoryById';

interface DeviceNgData {
  entryTime: Date;
  machineCode: string;
  workflowId: number;
  url: string;
}

@Component({
  selector: 'app-autoliv-ng-history',
  templateUrl: './autoliv-ng-history.component.html',
  styleUrl: './autoliv-ng-history.component.less'
})
export class AutolivNgHistoryComponent implements OnInit {
  private modalClosed = new EventEmitter<boolean>();
  public imageUrl = 'https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg';
  public product_ins: NzUploadFile[] = [];
  public inspector_ops: NzUploadFile[] = [];
  public inspector_check: NzUploadFile[] = [];
  public previewImage?: string;
  public previewVisible = false;
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';

  public data: ReadonlyArray<DeviceNgData> = [];

  public form: UntypedFormGroup = this.fb.group({
    machineCode: [null, ],
    mainRange: [null, ],
    workflowId: [null, ],
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apollo: Apollo,
    private msg: NzMessageService,
    private fb: UntypedFormBuilder,
    private mobileDetector: MobileDetectorService,
    private view: ViewContainerRef,
    private modal: NzModalService,
    private productsService: ProductsService
  ) { }

  ngOnInit(){}
  public onClickUpload() : void {
    this.modal.create({
      nzTitle: '上传历史不良记录',
      nzContent: UploadHistoryComponent,
      nzViewContainerRef: this.view,
    });
  }

  public onClickNavigateToDoc(item: DeviceNgData): void {
    window.open(item.url);
  }

  public handlePreview = async (file: NzUploadFile) => {
    this.previewImage = file.url;
    this.previewVisible = true;
  };
  public onClickSearchButton(): void {
    this.apollo.query<GetAutolivNgHistoryById>({
      query: GET_AUTOLIV_NG_HISTORY_BY_ID,
      variables: {
        id: this.productId,
        ii: {
          machineCode: this.form.controls.machineCode.value,
          dateRange: this.form.controls.mainRange.value,
          workflowMetaId: this.form.controls.workflowId.value,
        },
      },
    }).pipe(
      map((x) => x?.data?.core?.product?.ngHistory)
    ).subscribe((x) => {
      this.data = x?.map((y) => ({
        entryTime: y?.entryTime ?? [],
        machineCode: y?.machineCode ?? '',
        workflowId: y?.workflowMetaId ?? '',
        url: y?.url ?? '',
      })) ?? [];
    });
  }
}
