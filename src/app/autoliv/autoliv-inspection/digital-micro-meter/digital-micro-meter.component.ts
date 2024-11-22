import { Component, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HFile, ProductsService, AddDocOfAutolivCommand, DeleteDocOfAutolivCommand  } from 'src/openapi';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { GetDigitalMicroMeter } from './__generated__/GetDigitalMicroMeter';
import { GET_DIGITAL_MICRO_METER } from './get_digital_micro_meter';

@Component({
  selector: 'app-digital-micro-meter',
  templateUrl: './digital-micro-meter.component.html',
  styleUrl: './digital-micro-meter.component.less'
})
export class DigitalMicroMeterComponent implements OnInit {
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public pdfSrc = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apollo: Apollo,
    private msg: NzMessageService,
    private view: ViewContainerRef,
    private productsService: ProductsService,
    private modalRef: NzModalRef,
  ) { }

  ngOnInit(){
    this.apollo.query<GetDigitalMicroMeter>({
      query: GET_DIGITAL_MICRO_METER,
      variables: {
        id: this.productId
      }
    }).subscribe(
      result => {
        this.pdfSrc = result?.data?.core?.product?.digitalMicroMeter?.url ?? '';
      },
      error => {
        this.msg.error(error);
      }
    );
  }

  public onClickUpload(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'digital_micro_meter',
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

  public onClickOk(): void {
    this.modalRef.close();
  }

  public onClickCancel(): void {
    this.modalRef.close();
  }
}
