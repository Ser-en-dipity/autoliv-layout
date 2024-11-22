import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIALSHAPE, RAW } from 'src/openapi';
import { MaterialQueryParam } from '../../models/material-query-param';
import { filter } from 'rxjs';

@Component({
  selector: 'app-material-search-box-v2',
  templateUrl: './material-search-box-v2.component.html',
  styleUrls: ['./material-search-box-v2.component.less']
})
export class MaterialSearchBoxV2Component implements OnInit {
  @Output()
  public queryParametersChange: EventEmitter<MaterialQueryParam> = new EventEmitter<MaterialQueryParam>();
  @Input()
  public subValueChanges: boolean = false;

  private queryParameters: MaterialQueryParam = {
    codeOrSpecSearch: '',
  };



  public form: UntypedFormGroup = this.fb.group({
    codeOrSpecSearch: [null],
    raw: [null],
    shape: [null],
  });

  public get shapeOptions(): Array<MATERIALSHAPE> {
    return Array.from(Object.values(MATERIALSHAPE));
  }

  public get rawOptions(): Array<RAW> {
    return Array.from(Object.values(RAW));
  }


  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((x) => {
      this.queryParameters = {
        ...this.queryParameters,
        ...x
      };

      this.form.patchValue(this.queryParameters);
      this.queryParametersChange.emit(this.queryParameters);
    });

    this.form.valueChanges
      .pipe(
        filter(() => this.subValueChanges)
      )
      .subscribe((x) => {

        this.queryParameters = {
          ...this.queryParameters,
          ...x
        };

        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: this.queryParameters,
          queryParamsHandling: 'merge'
        })


        this.queryParametersChange.emit(this.queryParameters);
      });



  }

}
