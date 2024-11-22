import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Order, OrdersService } from 'src/openapi';

@Component({
  selector: 'app-order-search-box',
  templateUrl: './orders-search-box.component.html',
  styleUrls: ['./orders-search-box.component.less'],
})
export class OrdersSearchBoxComponent implements OnInit {
  @Output()
  public orders = new EventEmitter<Array<Order>>();

  public searchChanges$ = new BehaviorSubject('');
  public optionList: Array<Order> = [];
  public isLoading = false;
  public selectedResults?: Array<Order>;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(debounceTime(320))
      .subscribe((queryString: string) => {
        this.ordersService
          .apiOrdersSearchPost({ query: queryString })
          .subscribe((r) => {
            this.optionList = r;
            this.isLoading = false;
          });
      });
  }

  public onSearch(value: string): void {
    this.isLoading = true;
    this.searchChanges$.next(value);
  }

  public onModelChange(opt: Array<Order>): void {
    this.orders.emit(opt);
  }
  public onClickSearchBtn(): void {}
}
