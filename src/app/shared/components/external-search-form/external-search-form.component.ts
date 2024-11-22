import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { CustomersService, ProductsService } from 'src/openapi';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

interface Selection {
  id: string;
  description: string;
}

@Component({
  selector: 'app-external-search-form',
  templateUrl: './external-search-form.component.html',
  styleUrls: ['./external-search-form.component.less'],
})
export class ExternalSearchFormComponent implements OnInit {
  public searchForm = this.fb.group({
    dateRange: [null],
    productIds: [null],
    customerId: [null],
    supplierId: [null],
  });
  constructor(
    private customersService: CustomersService,
    private productsService: ProductsService,
    private fb: UntypedFormBuilder,
    private modal: NzModalService
  ) {}

  public customerOptions: Array<Selection> = [];
  public customerSearchBoxOnChange$: BehaviorSubject<string> =
    new BehaviorSubject('');

  public productOptions: Array<Selection> = [];
  public productSearchBoxOnChange$: BehaviorSubject<string> =
    new BehaviorSubject('');

  public boxLoading = false;
  public isCollapse = false;
  public confirmModal?: NzModalRef; // For testing by now

  ngOnInit(): void {
    this.customerSearchBoxOnChange$
      .asObservable()
      .pipe(debounceTime(120))
      .subscribe((qstr: string) => {
        this.customersService
          .apiCustomersSearchPost({ query: qstr })
          .subscribe((r) => {
            this.customerOptions = r.map((x) => ({
              id: x.id!,
              description: x.name!,
            }));
          });
      });

    this.productSearchBoxOnChange$
      .asObservable()
      .pipe(debounceTime(120))
      .subscribe((qstr: string) => {
        this.productsService
          .apiProductsSearchPost({ query: qstr })
          .subscribe((r) => {
            this.productOptions = r.map((x) => ({
              id: x.id!,
              description: Array.from(x.aliases?.values() ?? []).join(','),
            }));
          });
      });
  }

  public resetForm(): void {
    this.searchForm.reset();
  }

  public toggleCollapse(): void {
    this.searchForm.reset();
    if (this.isCollapse) {
      this.confirmModal = this.modal.confirm({
        nzTitle: '了解范围搜索?',
        nzContent:
          '一般情况下精确搜索已经可以满足要求，若需要范围搜索，请尽量将搜索范围缩小',
        nzOnOk: () =>
          new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 120);
          }).catch(() => {}),
      });
    }
    this.isCollapse = !this.isCollapse;
  }

  public onSearchCustomer(v: string): void {
    this.boxLoading = true;
    this.customerSearchBoxOnChange$.next(v);
  }
  public onSearchProduct(v: string): void {
    this.boxLoading = true;
    this.productSearchBoxOnChange$.next(v);
  }
}
