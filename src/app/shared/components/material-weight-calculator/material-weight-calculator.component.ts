import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

export enum Shape {
  Round = '圆',
  Square = '四方',
  Hexagon = '六角',
}
export enum Material {
  Copper = '铜',
  Aluminum = '铝',
  Steel = '钢/铁',
}

@Component({
  selector: 'app-material-weight-calculator',
  templateUrl: './material-weight-calculator.component.html',
  styleUrls: ['./material-weight-calculator.component.less'],
})
export class MaterialWeightCalculatorComponent {
  public weight = 0;
  public unitWeight = 0;

  public calcForm: UntypedFormGroup = this.fb.group({
    shape: [Shape.Round, [Validators.required]],
    material: [Material.Steel, [Validators.required]],
    innerDiameter: [
      0,
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^\\d+(.\\d{1,5})?$'),
      ],
    ],
    outerDiameter: [
      0,
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^\\d+(.\\d{1,5})?$'),
      ],
    ],
    length: [
      0,
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^\\d+(.\\d{1,5})?$'),
      ],
    ],
    number: [
      1,
      [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^\\d+(.\\d{1,5})?$'),
      ],
    ],
  });
  public get innerDiameter(): AbstractControl {
    return this.calcForm.controls.innerDiameter;
  }
  public get outerDiameter(): AbstractControl {
    return this.calcForm.controls.outerDiameter;
  }
  public get length(): AbstractControl {
    return this.calcForm.controls.length;
  }
  public get number(): AbstractControl {
    return this.calcForm.controls.number;
  }

  public get ShapeOptions(): Array<Shape> {
    return Object.values(Shape);
  }
  public get MaterialOptions(): Array<Material> {
    return Object.values(Material);
  }

  public GetShapeLabel(s: Shape): string {
    return s.toString();
  }

  public calc(): void {
    for (const key in this.calcForm.controls) {
      if (!this.calcForm.controls[key].valid) {
        this.unitWeight = 0;
        this.weight = 0;
        return;
      }
    }

    if (
      this.calcForm.controls.outerDiameter.value <=
      this.calcForm.controls.innerDiameter.value
    ) {
      this.msg.error('外径不能小于内径');
      return;
    }

    const square = ((s: Shape, or: number, ir: number): number => {
      switch (s) {
        case Shape.Round:
          return ((or * or - ir * ir) * Math.PI) / 4.0;
        case Shape.Hexagon:
          return ((or * or - ir * ir) * Math.sqrt(3) * 2) / 4.0;
        case Shape.Square:
          return or * or - ir * ir;
      }
    })(
      this.calcForm.controls.shape.value,
      this.calcForm.controls.outerDiameter.value,
      this.calcForm.controls.innerDiameter.value
    );

    const rho = ((m: Material): number => {
      switch (m) {
        case Material.Aluminum:
          return 2.7e-6;
        case Material.Copper:
          return 8.96e-6;
        case Material.Steel:
          return 7.874e-6;
      }
    })(this.calcForm.controls.material.value);

    this.unitWeight = rho * square * this.calcForm.controls.length.value;
    this.weight = this.unitWeight * this.calcForm.controls.number.value;
  }

  constructor(
    private fb: UntypedFormBuilder,
    private modalRef: NzModalRef,
    private msg: NzMessageService
  ) {}

  public onClickCancel(): void {
    this.modalRef.close();
  }
}
