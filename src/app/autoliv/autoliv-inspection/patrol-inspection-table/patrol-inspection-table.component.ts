import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable, Subscription } from 'rxjs';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HFile, ProductsService, AddDocOfAutolivCommand, DeleteDocOfAutolivCommand, GetPatrolSelfTableOfAutolivCommand, PatrolSelfType, UpdatePatrolSelfOfAutolivCommand } from 'src/openapi';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

interface PatrolInspectData {
  id : string;
  dimension : string;
  patrol : string;
  min_val : string;
  max_val : string;
  measure_tool : string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
}
@Component({
  selector: 'app-patrol-inspection-table',
  templateUrl: './patrol-inspection-table.component.html',
  styleUrl: './patrol-inspection-table.component.less'
})
export class PatrolInspectionTableComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: PatrolInspectData } } = {};
  public patrolTableData: PatrolInspectData[] = [];
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public machineCode:string = 'A001';
  
  constructor(private apollo: Apollo,
    private msg: NzMessageService,
    private fb: UntypedFormBuilder,
    private view: ViewContainerRef,
    private productsService: ProductsService,
    private modalRef: NzModalRef,
  ) {}

  ngOnInit(): void {
    const cmd: GetPatrolSelfTableOfAutolivCommand = {
      product_id: this.productId,
      machine_code: this.machineCode,
      patrol_self_type: PatrolSelfType.PatrolInspectionTable
    };
    this.productsService.apiProductsAutolivReadPatrolSelfTablePost(cmd).subscribe((x) => {
      this.patrolTableData = x.map((y,index) => ({
        id: (index+1).toString(),
        dimension: y?.dimension ?? '',
        patrol: y?.patrol ?? '',
        min_val: y?.minVal ?? '',
        max_val: y?.maxVal ?? '',
        measure_tool: y?.measureTool ?? '',
        item1: y?.item1 ?? '',
        item2: y?.item2 ?? '',
        item3: y?.item3 ?? '',
        item4: y?.item4 ?? '',
        item5: y?.item5 ?? '',
        item6: y?.item6 ?? ''
      }));
      this.updateEditCache();
    });
  }

  public updateEditCache(): void {
    this.patrolTableData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  public onClickSave(): void {
    this.patrolTableData.forEach(item => {
      const index = this.patrolTableData.findIndex(x => x.id === item.id);
      Object.assign(this.patrolTableData[index], this.editCache[item.id].data);
    });

    const cmd: UpdatePatrolSelfOfAutolivCommand = {
      product_id: this.productId,
      machine_code: this.machineCode,
      id_items_pairs: this.patrolTableData.map((val,index) => ({
        id: val.id,
        item1: val.item1,
        item2: val.item2,
        item3: val.item3,
        item4: val.item4,
        item5: val.item5,
        item6: val.item6
      })),
      patrol_self_type: PatrolSelfType.PatrolInspectionTable
    };
    this.productsService.apiProductsAutolivPatrolSelfTablePatch(cmd).subscribe((x) => {
    });
  }

  public onClickOk(): void {
  }

  public onClickCancel(): void {
    this.modalRef.close();
  }
}
