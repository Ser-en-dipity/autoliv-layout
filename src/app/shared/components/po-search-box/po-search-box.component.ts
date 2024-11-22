import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PurchasingOrder, PurchasingOrdersService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-po-search-box',
  templateUrl: './po-search-box.component.html',
  styleUrls: ['./po-search-box.component.less'],
})
export class PoSearchBoxComponent implements OnInit {
  @Output()
  public purchasingOrders = new EventEmitter<Array<PurchasingOrder>>();
  @Output()
  public purchasingOrder = new EventEmitter<PurchasingOrder>();

  @Input()
  public multiple = false;

  @Input()
  public expandable = false;

  public isLoading = false;

  public selectedResults?: Array<PurchasingOrder>;
  public searchChanges$ = new BehaviorSubject('');
  public options: Array<PurchasingOrder> = [];

  public form: UntypedFormGroup = this.fb.group({
    state: [, [Validators.required]],
  });

  public onSearch(v: string): void {
    this.isLoading = true;
    this.searchChanges$.next(v);
  }
  public onModelChange(
    v: Array<PurchasingOrder> | PurchasingOrder | null
  ): void {
    if (this.multiple) {
      this.purchasingOrders.emit(v as Array<PurchasingOrder>);
    } else {
      this.purchasingOrder.emit(v as PurchasingOrder);
    }
  }

  constructor(private fb: UntypedFormBuilder, private po: PurchasingOrdersService) {}

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(debounceTime(180))
      .subscribe((x) => {
        this.po
          .apiPurchasingOrdersSearchPost({ query: x })
          .subscribe((resp) => {
            this.options = resp;
            this.isLoading = false;
          });
      });
  }
}
