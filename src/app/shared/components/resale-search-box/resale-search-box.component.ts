import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ReSale, ReSalesService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-resale-search-box',
  templateUrl: './resale-search-box.component.html',
  styleUrls: ['./resale-search-box.component.less']
})
export class ResaleSearchBoxComponent implements OnInit {
  @Output()
  public reSales = new EventEmitter<Array<ReSale>>();
  @Output()
  public reSale = new EventEmitter<ReSale>();

  @Input()
  public multiple = false;

  @Input()
  public expandable = false;

  public isLoading = false;

  public selectedResults?: Array<ReSale>;
  public searchChanges$ = new BehaviorSubject('');
  public options: Array<ReSale> = [];

  public form: UntypedFormGroup = this.fb.group({
    state: [, [Validators.required]],
  });

  public onSearch(v: string): void {
    this.isLoading = true;
    this.searchChanges$.next(v);
  }
  public onModelChange(
    v: Array<ReSale> | ReSale | null
  ): void {
    if (this.multiple) {
      this.reSales.emit(v as Array<ReSale>);
    } else {
      this.reSale.emit(v as ReSale);
    }
  }

  constructor(private fb: UntypedFormBuilder, private po: ReSalesService) {}

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(debounceTime(180))
      .subscribe((x) => {
        this.po
          .apiReSalesSearchPost({ query: x })
          .subscribe((resp) => {
            this.options = resp;
            this.isLoading = false;
          });
      });
  }
}
