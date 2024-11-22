import {
  Component,
  EventEmitter,
  importProvidersFrom,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import {
  HFile,
  DeleteDocOfAutolivCommand,
  ProductsService,
  AddDocOfAutolivCommand,
} from 'src/openapi';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Subscription } from 'rxjs';
import { MobileDetectorService } from 'src/app/shared/mobile-detector.service';
import { ToolUploadComponent } from './tool-upload/tool-upload.component';
import { GET_AUTOLIV_TOOL_PROGRAM } from './get_autoliv_tool_program';
import { GetAutolivToolProgram } from './__generated__/GetAutolivToolProgram';
import { CraftFlowComponent } from './craft-flow/craft-flow.component';
import { ToolBomDocComponent } from './tool-bom-doc/tool-bom-doc.component';

interface ProgramData {
  entryTime: Date;
  code: string;
  processDuration: number;
  url: string;
}
@Component({
  selector: 'app-autoliv-tools',
  templateUrl: './autoliv-tools.component.html',
  styleUrl: './autoliv-tools.component.less'
})
export class AutolivToolsComponent implements OnInit {
  private queryRef?: QueryRef<GetAutolivToolProgram>;
  private querySub?: Subscription;
  public loading = true;
  public previewImage?: string;
  public previewVisible = false;
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public machineCode: string = '';

  public data: ReadonlyArray<ProgramData> = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private apollo: Apollo,
    private modal: NzModalService,
    private view: ViewContainerRef,
    private viewContainerRef: ViewContainerRef,
    private msg: NzMessageService,
    private mobileDetector: MobileDetectorService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const machineCode = localStorage.getItem('machineCode');
    if (machineCode) {
      this.machineCode = machineCode;
      console.log('machineCode:', machineCode);
    }
    this.queryRef = this.apollo.watchQuery<GetAutolivToolProgram>({
      query: GET_AUTOLIV_TOOL_PROGRAM,
      variables: {
        id: this.productId,
      }
    });
    this.querySub = this.queryRef.valueChanges.subscribe(
      ({ data, loading }) => {
        if (data.core?.product?.programs) {
          this.data = data.core.product.programs.map((e) => ({
            entryTime: e?.entryTime ?? new Date(),
            code: e?.programCode ?? '',
            processDuration: 10,
            url: e?.url ?? '',
          }));
          this.loading = loading;
        }
      }
    );

  }

  public onClickNavigateToDoc(item: ProgramData): void {
    window.open(item.url);
  }

  public handlePreview = async (file: NzUploadFile) => {
    this.previewImage = file.url;
    this.previewVisible = true;
  };
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

  public onUploadProcessFlow(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'process_flow',
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

  public onUploadToolBom(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'tool_bom',
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

  public onClickUploadNewProgram(): void {
    this.modal.create({
      nzTitle: '上传程序',
      nzContent: ToolUploadComponent,
      nzViewContainerRef: this.view,
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToCraftFlow(): void {
    this.modal.create({
      nzTitle: '加工工艺流程',
      nzContent: CraftFlowComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

  public onClickNavigateToToolBom(): void {
    this.modal.create({
      nzTitle: '刀具BOM',
      nzContent: ToolBomDocComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

}
