import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { InputMachineCodeComponent } from './input-machine-code/input-machine-code.component';
@Component({
  selector: 'app-autoliv-infra',
  templateUrl: './autoliv-infra.component.html',
  styleUrl: './autoliv-infra.component.less'
})
export class AutolivInfraComponent implements OnInit {
  public productName: string = 'Charge Holder, AI-2,3 mm';
  public drawingCode: string = '165F2091F0XS';
  public productCode: string = '165F2091F0XS';
  public productMaterial: string = '不锈钢';
  public productWeight: string = '0.1kg';
  public productProcessing: string = '冲压';
  public productSpec: string = '无';

  constructor(
    private modal: NzModalService,
    private view: ViewContainerRef,
  ) {}

  ngOnInit(): void { 
  }

  public onClickInputMachineCode(): void {
    this.modal.create({
      nzTitle: '上传程序',
      nzContent: InputMachineCodeComponent,
      nzViewContainerRef: this.view,
    });
  }
}
