import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Supplier, SuppliersService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-supplier-search-box',
  templateUrl: './supplier-search-box.component.html',
  styleUrls: ['./supplier-search-box.component.less'],
})
export class SupplierSearchBoxComponent implements OnInit {
  @Input()
  public preSelectedId?: string;

  @Output()
  public supplier: EventEmitter<Supplier> = new EventEmitter();



  public searchChanges$ = new BehaviorSubject('');
  public options: Array<Supplier> = [];
  public isLoading = false;
  public selectedSupplier?: Supplier;

  constructor(private supplierService: SuppliersService, private msg: NzMessageService) {

    this.searchChanges$
      .asObservable()
      .pipe(
        debounceTime(42),
        switchMap((qstr) => this.supplierService.apiSuppliersSearchPost({ query: qstr }))
      )
      .subscribe(
        {
          next: (x) => {
            this.options = x;
            this.isLoading = false;
            
            if (this.preSelectedId && this.preSelectedId.length > 0) {
              this.selectedSupplier = this.options.find(x => x.id && this.preSelectedId === x.id);
              this.supplier.emit(this.selectedSupplier);
            }

          },
          error: (err) => {
            this.msg.error(err.message);
          }
        }
      );
  }

  ngOnInit(): void { }

  public onSearch(value: string): void {
    this.isLoading = true;
    this.searchChanges$.next(value);
  }

  public onModelChange(opt: Supplier): void {
    this.supplier.emit(opt);
  }
}
