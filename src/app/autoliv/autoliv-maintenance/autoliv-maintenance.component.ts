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
import { GET_AUTOLIV_MAINTENANCE_BY_ID } from './get_maintenance';
import { GetAutolivMaintenanceById } from './__generated__/GetAutolivMaintenanceById';
import { MaintenanceProfileComponent } from './maintenance-profile/maintenance-profile.component';
import { SpotCheckTableComponent } from './spot-check-table/spot-check-table.component';
import { UploadSpotCheckComponent } from './upload-spot-check/upload-spot-check.component';
import { MachineMaintenanceTableComponent } from './machine-maintenance-table/machine-maintenance-table.component';
import { UploadUpkeepTableComponent } from './upload-upkeep-table/upload-upkeep-table.component';
import { DeviceOperationInstructionComponent } from './device-operation-instruction/device-operation-instruction.component';
import { SpotCheckInstructionComponent } from './spot-check-instruction/spot-check-instruction.component';

interface MainData {
  entryTime: Date;
  machineCode: string;
  url: string;
}

@Component({
  selector: 'app-autoliv-maintenance',
  templateUrl: './autoliv-maintenance.component.html',
  styleUrl: './autoliv-maintenance.component.less'
})
export class AutolivMaintenanceComponent implements OnInit {
  private modalClosed = new EventEmitter<boolean>();
  public previewImage?: string;
  public previewVisible = false;
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  public data: ReadonlyArray<MainData> = [];
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
    // this.apollo.query<GetAutolivDeviceOpById>({
    //   query: GET_AUTOLIV_DEVICE_OP_BY_ID,
    //   variables: {
    //     id: this.productId,
    //   },
    // }).pipe(
    //   map((x) => x?.data?.core?.product)
    // ).subscribe((x) => {
      
    // });
  }

  public onClickNavigateToDoc(item: MainData): void {
    window.open(item.url);
  }

  public handlePreview = async (file: NzUploadFile) => {
    this.previewImage = file.url;
    this.previewVisible = true;
  };

  public onUploadDeviceOp(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'device_op',
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

  public onUploadSpotInstruction(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'spot_check_instruction',
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
    this.apollo.query<GetAutolivMaintenanceById>({
      query: GET_AUTOLIV_MAINTENANCE_BY_ID,
      variables: {
        id: this.productId,
        ii: {
          machineCode: this.form.controls.machineCode.value,
          dateRange: this.form.controls.mainRange.value,
        },
      },
    }).pipe(
      map((x) => x?.data?.core?.product?.maintenance)
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
      nzTitle: '上传维修记录',
      nzContent: MaintenanceProfileComponent,
      nzViewContainerRef: this.view,
    });
  }

  public onClickNavigateToDeviceInspection(): void {
    this.modal.create({
      nzTitle: '设备点检表',
      nzContent: SpotCheckTableComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
    });
  }

  public onUploadSpotTable(): void {
    this.modal.create({
      nzTitle: '上传点检表',
      nzContent: UploadSpotCheckComponent,
      nzViewContainerRef: this.view,
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToMachineMaintenance(): void {
    this.modal.create({
      nzTitle: '机台保养表',
      nzContent: MachineMaintenanceTableComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onUploadMaintenanceTable(): void {
    this.modal.create({
      nzTitle: '上传保养表',
      nzContent: UploadUpkeepTableComponent,
      nzViewContainerRef: this.view,
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToDeviceOperationInstruction(): void {
    this.modal.create({
      nzTitle: '设备操作指导书',
      nzContent: DeviceOperationInstructionComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToSpotCheckInstruction(): void {
    this.modal.create({
      nzTitle: '点检指导书',
      nzContent: SpotCheckInstructionComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

}
