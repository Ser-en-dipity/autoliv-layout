import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Product, ProductsService } from 'src/openapi';

@Component({
  selector: 'app-product-search-box',
  templateUrl: './product-search-box.component.html',
  styleUrls: ['./product-search-box.component.less'],
})
export class ProductSearchBoxComponent implements OnInit {
  @Output()
  public products = new EventEmitter<ReadonlyArray<Product> | null>();
  @Output()
  public product = new EventEmitter<Product | null>();

  @Input()
  public multiple = false;

  @Input()
  public expandable = false;
  @Input()
  public verbose = true;

  public searchChanges$ = new BehaviorSubject('');
  public optionList: Product[] = [];
  public isLoading = false;
  public selectedResults?: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(
        filter((x) => x.length > 0),
        debounceTime(18),
        switchMap((queryString: string) =>
          this.productsService.apiProductsSearchPost({
            query: queryString,
            all: false,
          })
        )
      )
      .subscribe((r) => {
        this.optionList = r;
        this.isLoading = false;
      });
  }

  public onSearch(value: string): void {
    this.isLoading = true;
    this.searchChanges$.next(value);
  }

  public onModelChange(opt: Array<Product> | Product | null): void {
    if (this.multiple) {
      if (opt) {
        this.products.emit([...(opt as Array<Product>)]);
      } else {
        this.products.emit(null);
      }
    } else {
      if (opt) {
        this.product.emit(opt as Product);
      } else {
        this.product.emit(null);
      }
    }
  }
  public onClickSearchBtn(): void {}
}
