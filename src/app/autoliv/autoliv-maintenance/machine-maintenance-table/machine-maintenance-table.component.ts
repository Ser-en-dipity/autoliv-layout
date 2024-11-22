import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable, Subscription } from 'rxjs';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HFile, ProductsService, AddDocOfAutolivCommand, DeleteDocOfAutolivCommand, GetUpKeepTableOfAutolivCommand, UpdateUpKeepOfAutolivCommand  } from 'src/openapi';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SpotCheckInstructionComponent } from '../spot-check-instruction/spot-check-instruction.component';

interface KeepUpData {
  id : string;
  project : string;
  cycle : string;
  spotContent : string;
  spotMethod : string;
  date_pair: string[];
}

@Component({
  selector: 'app-machine-maintenance-table',
  templateUrl: './machine-maintenance-table.component.html',
  styleUrl: './machine-maintenance-table.component.less'
})
export class MachineMaintenanceTableComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: KeepUpData } } = {};
  public keepTableData: KeepUpData[] = [];
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public machineCode:string = 'A001';
  public isDateMatch: Array<boolean> = [];

  constructor(private apollo: Apollo,
    private msg: NzMessageService,
    private fb: UntypedFormBuilder,
    private view: ViewContainerRef,
    private productsService: ProductsService,
    private modalRef: NzModalRef,
    private modal: NzModalService,
  ) {}
  ngOnInit(): void {
    for(let i = 0; i < 12; i++) {
      this.isDateMatch.push(false);
    }
    const cmd: GetUpKeepTableOfAutolivCommand = {
      product_id: this.productId,
      machine_code: this.machineCode
    };
    this.productsService.apiProductsAutolivReadUpkeepTablePost(cmd).subscribe((x) => {
      this.keepTableData = x.map((y,index) => ({
        id: (index+1).toString(),
        project: y?.project ?? '',
        cycle: y?.cycle ?? '',
        spotContent: y?.spotContent ?? '',
        spotMethod: y?.spotMethod ?? '',
        date_pair: y?.monthValuePairs?.map(x => x?.value ?? '') ?? ['']
      }));
      this.updateEditCache();
    });

    this.startEdit();
  }

  public updateEditCache(): void {
    this.keepTableData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  public startEdit(): void {
    //time now and fetch date
    const now = new Date();
    const month = now.getMonth();
    this.isDateMatch[month] = true;
  }

  public onClickSave(): void {
    this.keepTableData.forEach(item => {
      const index = this.keepTableData.findIndex(x => x.id === item.id);
      Object.assign(this.keepTableData[index], this.editCache[item.id].data);
    });
    const now = new Date();
    const month = now.getMonth();
    this.isDateMatch[month] = false;

    const cmd: UpdateUpKeepOfAutolivCommand = {
      product_id: this.productId,
      machine_code: this.machineCode,
      id_value_pairs: this.keepTableData.map((val,index) => ({
        id: val.id,
        value: val.date_pair[month]
      }))
      
    };
    this.productsService.apiProductsAutolivUpkeepTablePatch(cmd).subscribe((x) => {
    });
  }

  public onClickCancel(): void {
    this.modalRef.close();
  }

  public onClickNavigateToDoc(): void {
    this.modal.create({
      nzTitle: '设备点检指导书',
      nzContent: SpotCheckInstructionComponent,
      nzViewContainerRef: this.view,
      nzWidth: '80%',
      nzMaskClosable: false,
    });
  }

}
