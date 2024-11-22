import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutsourcingOrder, OutsourcingOrdersService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-oo-search-box',
  templateUrl: './oo-search-box.component.html',
  styleUrls: ['./oo-search-box.component.less'],
})
export class OoSearchBoxComponent implements OnInit {
  @Input()
  public multiple = true;

  @Output()
  public outsourcingOrders = new EventEmitter<Array<OutsourcingOrder> | null>();

  @Output()
  public outsourcingOrder = new EventEmitter<OutsourcingOrder | null>();

  public isLoading = false;

  public selectedResults?: Array<OutsourcingOrder>;
  public searchChanges$ = new BehaviorSubject('');
  public options: Array<OutsourcingOrder> = [];

  constructor(private ooService: OutsourcingOrdersService) {}

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(debounceTime(180))
      .subscribe((x) => {
        this.ooService
          .apiOutsourcingOrdersSearchPost({ query: x })
          .subscribe((resp) => {
            this.options = resp;
            this.isLoading = false;
          });
      });
  }

  public onSearch(v: string): void {
    this.isLoading = true;
    this.searchChanges$.next(v);
  }

  public onModelChange(
    v: Array<OutsourcingOrder> | OutsourcingOrder | null
  ): void {
    if (this.multiple) {
      this.outsourcingOrders.emit(v as Array<OutsourcingOrder>);
    } else {
      this.outsourcingOrder.emit(v as OutsourcingOrder);
    }
  }
}
