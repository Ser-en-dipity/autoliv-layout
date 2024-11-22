import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, FINISH, MATERIAL, ProductsQueryCommand } from 'src/openapi';
import { filter } from 'rxjs';


@Component({
  selector: 'app-product-search-box-v2',
  templateUrl: './product-search-box-v2.component.html',
  styleUrls: ['./product-search-box-v2.component.less']
})
export class ProductSearchBoxV2Component implements OnInit {
  // private customerIds: Array<string> = [];
  private _queryParam: ProductsQueryCommand = {
    customer_ids: [],
    code_or_name_search: null,
    // material: null
    // material: undefined,
  };

  public form: UntypedFormGroup = this.fb.group({
    customer_ids: [null],
    code_or_name_search: [null],
    material: [null],
    finish: [null],
  });

  @Input()
  public subValueChanges: boolean = false;

  @Output()
  public queryParametersChange: EventEmitter<ProductsQueryCommand> = new EventEmitter<ProductsQueryCommand>();

  public get preSelectedCustomerIds(): Array<string> {
    return this._queryParam.customer_ids ?? []

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
      this._queryParam = {
        ...this._queryParam,
        ...x
      };
      this.form.patchValue(this._queryParam);
      // this.queryParametersChange.emit(this._queryParam);
    });

    this.form.valueChanges
      .pipe(
        filter(() => this.subValueChanges)
      )
      .subscribe((x) => {

        this._queryParam = {
          ...this._queryParam,
          ...x
        };

        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: this._queryParam,
          queryParamsHandling: 'merge'
        })


        this.queryParametersChange.emit(this._queryParam);
      });

  }

  public get finishOptions(): ReadonlyArray<FINISH> {
    return Array.from(Object.values(FINISH));
  }
  public get materialOptions(): ReadonlyArray<MATERIAL> {
    return Array.from(Object.values(MATERIAL));
  }

  public onGetCustomers(customers: ReadonlyArray<Customer> | null): void {
    if (customers) {
      this.form.controls.customer_ids.setValue(customers.map((x) => x.id!));
    } else {
      // this.customerIds = [];
      this.form.controls.customer_ids.setValue([]);
    }
    this._queryParam = { ...this._queryParam, customer_ids: this.form.controls.customer_ids.value };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: this._queryParam,
      queryParamsHandling: 'merge'
    })
  }


}
