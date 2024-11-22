import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer, CustomersService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-search-box',
  templateUrl: './customer-search-box.component.html',
  styleUrls: ['./customer-search-box.component.less'],
})
export class CustomerSearchBoxComponent implements OnInit {
  @Input()
  public multiple = false;
  @Input()
  public preSelectedCustomerIds?: ReadonlyArray<string> = [];

  @Output()
  public customer = new EventEmitter<Customer | null>();
  @Output()
  public customers = new EventEmitter<ReadonlyArray<Customer> | null>();

  public isLoading = false;
  public optionList: ReadonlyArray<Customer> = [];
  public selectedCustomer?: Customer;
  public selectedCustomers: Array<Customer> = [];
  public searchChanges$ = new BehaviorSubject('');

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(
        debounceTime(130),
        switchMap((qstr) =>
          this.customersService.apiCustomersSearchPost({
            query: qstr,
            all: false,
          })
        )
      )
      .subscribe((x) => {
        this.optionList = x;
        this.isLoading = false;

        if (this.preSelectedCustomerIds && this.preSelectedCustomerIds.length > 0) {
          // this.selectedCustomer = this.optionList.find(x => x.id && this.preSelectedCustomerIds?.includes(x.id));
          this.selectedCustomers = this.optionList.filter(x => x.id && this.preSelectedCustomerIds?.includes(x.id));

          this.customers.emit(this.selectedCustomers);
        }
      });
  }
  public onSearch(value: string): void {
    this.isLoading = true;
    this.searchChanges$.next(value);
  }

  public onModelChange(opt: Customer | ReadonlyArray<Customer> | null): void {
    if (this.multiple) {
      if (opt) {
        this.customers.emit(opt as ReadonlyArray<Customer>);
      } else {
        this.customers.emit(null);
      }
    } else {
      if (opt) {
        this.customer.emit(opt as Customer);
      } else {
        this.customer.emit(null);
      }
    }
  }
}
