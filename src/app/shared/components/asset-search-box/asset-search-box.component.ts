import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Asset, AssetsService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-asset-search-box',
  templateUrl: './asset-search-box.component.html',
  styleUrls: ['./asset-search-box.component.less'],
})
export class AssetSearchBoxComponent implements OnInit {
  @Output() //
  public asset = new EventEmitter<Asset>();

  public searchChanges$ = new BehaviorSubject('');
  public options: Asset[] = [];
  public isLoading = false;
  public selectedResult?: Asset[];

  public assets: Array<Asset> = [];

  constructor(private assetService: AssetsService) {}

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(
        debounceTime(18),
        filter((x) => x.length > 0),
        switchMap((qstr: string) =>
          this.assetService.apiAssetsSearchPost({ query: qstr })
        )
      )
      .subscribe((r) => {
        this.options = r;
        this.isLoading = false;
      });
  }

  public onSearch(value: string): void {
    this.isLoading = true;
    this.searchChanges$.next(value);
  }

  public onModelChange(opt: Asset): void {
    this.asset.emit(opt);
  }
}
