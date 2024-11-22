import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ManufactureOrder, ManufactureOrdersService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-mo-search-box',
  templateUrl: './mo-search-box.component.html',
  styleUrls: ['./mo-search-box.component.less'],
})
export class MoSearchBoxComponent implements OnInit {
  @Input()
  public multiple = true;

  @Output()
  public manufactureOrders = new EventEmitter<Array<ManufactureOrder> | null>();

  @Output()
  public mo = new EventEmitter<ManufactureOrder | null>();

  public isLoading = false;
  public selectedResults?: Array<ManufactureOrder>;
  public searchChanges$ = new BehaviorSubject('');
  public options: Array<ManufactureOrder> = [];

  constructor(private moService: ManufactureOrdersService) {}

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(debounceTime(180))
      .subscribe((x) => {
        this.moService
          .apiManufactureOrdersSearchPost({ query: x })
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
    v: Array<ManufactureOrder> | ManufactureOrder | null
  ): void {
    if (this.multiple) {
      this.manufactureOrders.emit(v as Array<ManufactureOrder>);
    } else {
      this.mo.emit(v as ManufactureOrder);
    }
  }
}
