import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-input-machine-code',
  templateUrl: './input-machine-code.component.html',
  styleUrl: './input-machine-code.component.less'
})
export class InputMachineCodeComponent implements OnInit {
  public form: UntypedFormGroup = this.fb.group({
    machineCode: [null, ],
  });
  constructor(
    private fb: UntypedFormBuilder,
    private modalRef: NzModalRef,
  ) {}

  ngOnInit(): void {
    const machineCode = localStorage.getItem('machineCode');
    if (machineCode) {
      this.form.setValue({ machineCode });
    }
  }

  public onClickOk(): void {
    localStorage.setItem('machineCode', this.form.value.machineCode);
    this.modalRef.close();
  }

  public onClickCancel(): void {
    this.modalRef.close();
  }

  

}