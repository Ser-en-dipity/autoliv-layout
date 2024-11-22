import { Component, OnInit,} from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import {
  HFile,
  DeleteDocOfAutolivCommand,
  ProductsService,
  AddDocOfAutolivCommand,
  UpdateCodeOfAutolivCommand,
} from 'src/openapi';
import { GET_PRODUCT_DETAIL_BY_ID } from 'src/app/core/product/product-detail/get-product-detail-by-id';
import { GetProductDetailById } from 'src/app/core/product/product-detail/__generated__/GetProductDetailById';
import { Apollo } from 'apollo-angular';

interface WorkflowMetaEntry {
  index: number;
  entryName: string;
  internalPartNumber: string;
}

@Component({
  selector: 'app-upload-history',
  templateUrl: './upload-history.component.html',
  styleUrl: './upload-history.component.less'
})
export class UploadHistoryComponent implements OnInit {
  public workflowOptions: Array<WorkflowMetaEntry> = [];
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public previewImage?: string;
  public previewVisible = false;
  public file_name: string = '';
  public form = this.fb.group({
    code: [null, [Validators.required]],
    workflowId: [null,],
  });

  constructor(
    private fb: UntypedFormBuilder,
    private modalRef: NzModalRef,
    private msg: NzMessageService,
    private productsService: ProductsService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    const machineCode = localStorage.getItem('machineCode');
    if (machineCode) {
      this.form.controls.code.setValue(machineCode);
    }
    
    this.apollo
      .query<GetProductDetailById>({
        query: GET_PRODUCT_DETAIL_BY_ID,
        variables: { id: this.productId },
      })
      .subscribe((x) => {
        const filteredWorkflow = x?.data?.core?.product?.workflowMetas?.filter((x) => !x?.deprecated && x?.entries);
          if (filteredWorkflow && filteredWorkflow.length > 0) {
            this.workflowOptions = filteredWorkflow[0]?.entries?.map(x => ({
              index: x?.index ?? 0,
              entryName: x?.workflowEntryName ?? '',
              internalPartNumber: x?.internalPartNumber ?? ''
            })) ?? [];
          }
      });
  }

  public onClickOk(): void {
    if (this.productId) {
      for (const key in this.form.controls) {
        if (!this.form.controls[key].valid) {
          return;
        }
      }
      console.log(this.form.controls.workflowId.value.index);
      if (this.file_name === '') return;
      const cmd: UpdateCodeOfAutolivCommand = {
        product_id: this.productId,
        machine_code: this.form.controls.code.value,
        workflow_id: this.form.controls.workflowId.value.index,
        file_name: this.file_name
      };
      this.productsService
        .apiProductsAutolivCodePatch(cmd)
        .subscribe((_) => {
          this.msg.success('上传成功');
          this.modalRef.close(true);
        });
    }
  }
  public onClickCancel(): void {
    this.modalRef.close();
  }

  public handlePreview = async (file: NzUploadFile) => {
    this.previewImage = file.url;
    this.previewVisible = true;
  };

  public onUploadHistory(v: NzUploadChangeParam): void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'ng_history',
      };
      this.file_name = file.file_name ?? '';
      this.productsService
        .apiProductsAutolivDocPatch(cmd)
        .subscribe((x) => {
          this.msg.success('上传成功');
        });
    }
  }
}
