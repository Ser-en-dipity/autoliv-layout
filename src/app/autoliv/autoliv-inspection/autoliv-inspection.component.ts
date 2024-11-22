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
import { GET_AUTOLIV_INSPECT_EXCEPTION_BY_ID } from './get_inspect_exception';
import { GetAutolivInspectExceptionById } from './__generated__/GetAutolivInspectExceptionById';
import { ExceptionRecordComponent } from './exception-record/exception-record.component';
import { UploadInspectSelfComponent } from './upload-inspect-self/upload-inspect-self.component';
import { PatrolInspectionTableComponent } from './patrol-inspection-table/patrol-inspection-table.component';
import { SelfCheckTableComponent } from './self-check-table/self-check-table.component';
import { ProductInspectInstructionComponent } from './product-inspect-instruction/product-inspect-instruction.component';
import { InspectorCheckRecordComponent } from './inspector-check-record/inspector-check-record.component';
import { DigitalMicroMeterComponent } from './digital-micro-meter/digital-micro-meter.component';
import { AirGaugeComponent } from './air-gauge/air-gauge.component';
import { ProfilerComponent } from './profiler/profiler.component';
import { ProjectorComponent } from './projector/projector.component';

interface InspectData {
  entryTime: Date;
  machineCode: string;
  url: string;
}
@Component({
  selector: 'app-autoliv-inspection',
  templateUrl: './autoliv-inspection.component.html',
  styleUrl: './autoliv-inspection.component.less'
})
export class AutolivInspectionComponent implements OnInit {
  private modalClosed = new EventEmitter<boolean>();
  public imageUrl = 'https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg';
  public previewImage?: string;
  public previewVisible = false;
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';

  public data: ReadonlyArray<InspectData> = [];

  public form: UntypedFormGroup = this.fb.group({
    machineCode: [null, ],
    mainRange: [null, ],
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

  ngOnInit(){
    const machineCode = localStorage.getItem('machineCode');
    if (machineCode) {
      this.form.controls.machineCode.setValue(machineCode);
    }
  }

  public onClickNavigateToDoc(item: InspectData): void {
    window.open(item.url);
  }

  public handlePreview = async (file: NzUploadFile) => {
    this.previewImage = file.url;
    this.previewVisible = true;
  };

  public onUploadProductIns(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'product_inspection',
      };
      this.productsService
        .apiProductsAutolivDocPatch(cmd)
        .subscribe((x) => {
          this.msg.success('上传成功');
          setTimeout(() => {
            window.location.reload();
          }, 100);
        });
    }
  }

  public onUploadInspectorOp(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'inspector_op',
      };
      this.productsService
        .apiProductsAutolivDocPatch(cmd)
        .subscribe((x) => {
          this.msg.success('上传成功');
          setTimeout(() => {
            window.location.reload();
          }, 100);
        });
    }
  }

  public onUploadInspectorCheck(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'inspector_check',
      };
      this.productsService
        .apiProductsAutolivDocPatch(cmd)
        .subscribe((x) => {
          this.msg.success('上传成功');
          setTimeout(() => {
            window.location.reload();
          }, 100);
        });
    }
  }

  public onRemove = (file: NzUploadFile): boolean | Observable<boolean> => {
    if (file && this.productId) {
      const cmd: DeleteDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.name,
      };
      return this.productsService.apiProductsAutolivDeleteDocPatch(cmd);
    }
    return false;
  };

  public onClickSearchButton(): void {
    this.apollo.query<GetAutolivInspectExceptionById>({
      query: GET_AUTOLIV_INSPECT_EXCEPTION_BY_ID,
      variables: {
        id: this.productId,
        ii: {
          machineCode: this.form.controls.machineCode.value,
          dateRange: this.form.controls.mainRange.value,
        },
      },
    }).pipe(
      map((x) => x?.data?.core?.product?.inspectException)
    ).subscribe((x) => {
      this.data = x?.map((y) => ({
        entryTime: y?.entryTime ?? [],
        machineCode: y?.machineCode ?? '',
        url: y?.url ?? '',
      })) ?? [];
    });
  }

  public onUploadMain() : void {
    this.modal.create({
      nzTitle: '上传巡检异常记录',
      nzContent: ExceptionRecordComponent,
      nzViewContainerRef: this.view,
      nzMaskClosable: false,
    });
  }

  public onUploadInsSelfTable(): void {
    this.modal.create({
      nzTitle: '上传巡检自检记录',
      nzContent: UploadInspectSelfComponent,
      nzViewContainerRef: this.view,
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToPatrolInspection(): void {
    this.modal.create({
      nzTitle: '巡检记录',
      nzContent: PatrolInspectionTableComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToSelfCheck(): void {
    this.modal.create({
      nzTitle: '自检记录',
      nzContent: SelfCheckTableComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToProductInspectionInstruction(): void {
    this.modal.create({
      nzTitle: '产品检验指导书',
      nzContent: ProductInspectInstructionComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToInspectorCheckRecord(): void {
    this.modal.create({
      nzTitle: '检验设备校验记录',
      nzContent: InspectorCheckRecordComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickDigitalMeter(): void {
    this.modal.create({
      nzTitle: '数显千分尺',
      nzContent: DigitalMicroMeterComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickAirGauge(): void {
    this.modal.create({
      nzTitle: '气动量仪',
      nzContent: AirGaugeComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickProfiler(): void {
    this.modal.create({
      nzTitle: '轮廓仪',
      nzContent: ProfilerComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickProjector(): void {
    this.modal.create({
      nzTitle: '投影仪',
      nzContent: ProjectorComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

}
