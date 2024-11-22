import { Component, OnInit, EventEmitter, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { MobileDetectorService } from 'src/app/shared/mobile-detector.service';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HFile, ProductsService, AddDocOfAutolivCommand, DeleteDocOfAutolivCommand  } from 'src/openapi';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GET_AUTOLIV_DRAWING_BY_ID } from './get_autoliv_drawing';
import { GetAutolivDrawingById } from './__generated__/GetAutolivDrawingById';

@Component({
  selector: 'app-autoliv-drawing',
  templateUrl: './autoliv-drawing.component.html',
  styleUrl: './autoliv-drawing.component.less'
})
export class AutolivDrawingComponent implements OnInit {
  private queryRef?: QueryRef<GetAutolivDrawingById>;
  private querySub?: Subscription;
  private modalClosed = new EventEmitter<boolean>();
  public imageUrl = '';
  public previewImage?: string;
  public previewVisible = false;
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apollo: Apollo,
    private msg: NzMessageService,
    private mobileDetector: MobileDetectorService,
    private modal: NzModalService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.modalClosed.subscribe((_) => this.queryRef?.refetch());
    if (this.productId) {
      this.queryRef = this.apollo.watchQuery<GetAutolivDrawingById>({
        query: GET_AUTOLIV_DRAWING_BY_ID,
        variables: { id: this.productId },
      });

      this.querySub = this.queryRef.valueChanges
        .pipe(map((x) => x.data.core?.product))
        .subscribe((product) => {
          this.imageUrl = product?.craft.url ?? '';
        });
    }
  
  }

  public handlePreview = async (file: NzUploadFile) => {
    this.previewImage = file.url;
    this.previewVisible = true;
  };

  public onUploadDrawing(v: NzUploadChangeParam):void {
    if (this.productId && v && v.type === 'success') {
      const file: HFile = v.file.response as HFile;
      const cmd: AddDocOfAutolivCommand = {
        product_id: this.productId,
        file_name: file.file_name,
        bucket: file.bucket,
        type: 'craft',
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

}
