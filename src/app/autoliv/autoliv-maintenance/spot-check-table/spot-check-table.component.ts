import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable, Subscription } from 'rxjs';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { HFile, ProductsService, AddDocOfAutolivCommand, DeleteDocOfAutolivCommand, GetCheckTableOfAutolivCommand, UpdateCheckTableOfAutolivCommand  } from 'src/openapi';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SpotCheckInstructionComponent } from '../spot-check-instruction/spot-check-instruction.component';

interface SpotCheckData {
  id : string;
  spec : string;
  spotItem : string;
  setpoint : string;
  spotMethod : string;
  date_pair: string[];
}
@Component({
  selector: 'app-spot-check-table',
  templateUrl: './spot-check-table.component.html',
  styleUrl: './spot-check-table.component.less'
})
export class SpotCheckTableComponent implements OnInit{
  editCache: { [key: string]: { edit: boolean; data: SpotCheckData } } = {};
  public spotTableData: SpotCheckData[] = [];
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public machineCode:string = '';
  public dateNow: Date = new Date();
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
    const machineCode = localStorage.getItem('machineCode');
    if (machineCode) {
      this.machineCode = machineCode;
    }
    for(let i = 0; i < 31; i++) {
      this.isDateMatch.push(false);
    }
    const cmd: GetCheckTableOfAutolivCommand = {
      product_id: this.productId,
      machine_code: this.machineCode
    };
    this.productsService.apiProductsAutolivReadCheckTablePost(cmd).subscribe((x) => {

      this.spotTableData = x.map((y) => ({
        id: y?.id ?? '',
        spec: y?.specialFeature ?? '',
        spotItem: y?.checkItem ?? '',
        setpoint: y?.setValue ?? '',
        spotMethod: y?.checkMethod ?? '',
        date_pair: y?.dateValuePairs?.map(x => x.value ?? '') ?? [''],
      }));
      this.updateEditCache();
    });
    
    this.startEdit();
  }

  public updateEditCache(): void {
    this.spotTableData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  public startEdit(): void {
    //time now and fetch date
    const now = new Date();
    const day = now.getDate();
    this.isDateMatch[day-1] = true;
  }

  public onClickSave(): void {
    this.spotTableData.forEach(item => {
      const index = this.spotTableData.findIndex(x => x.id === item.id);
      Object.assign(this.spotTableData[index], this.editCache[item.id].data);
    });
    const now = new Date();
    const day = now.getDate();
    this.isDateMatch[day-1] = false;

    const cmd: UpdateCheckTableOfAutolivCommand = {
      product_id: this.productId,
      machine_code: this.machineCode,
      id_value_pairs: this.spotTableData.map((val,index) => ({
        id: val.id,
        value: val.date_pair[day-1]
      }))
    };
    this.productsService.apiProductsAutolivCheckTablePatch(cmd).subscribe((x) => {
    });
  }

  public onClickOk(): void {
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
