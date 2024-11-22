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
@Component({
  selector: 'app-upload-spot-check',
  templateUrl: './upload-spot-check.component.html',
  styleUrl: './upload-spot-check.component.less'
})
export class UploadSpotCheckComponent implements OnInit {
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public previewImage?: string;
  public previewVisible = false;
  public file_name: string = '';
  public form = this.fb.group({
    code: [null, [Validators.required]],
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
  }

  public onClickOk(): void {
    if (this.productId) {
      for (const key in this.form.controls) {
        if (!this.form.controls[key].valid) {
          return;
        }
      }
      if (this.file_name === '') return;
      const cmd: UpdateCodeOfAutolivCommand = {
        product_id: this.productId,
        machine_code: this.form.controls.code.value,
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

  public onUploadSpotCheck(v: NzUploadChangeParam): void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'spot_check_table',
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
