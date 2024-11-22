import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PkgMaterialService } from 'src/openapi/api/pkgMaterial.service';
import { PkgMaterial } from 'src/openapi/';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pkg-material-search-box',
  templateUrl: './pkg-material-search-box.component.html',
  styleUrls: ['./pkg-material-search-box.component.less']
})
export class PkgMaterialSearchBoxComponent implements OnInit {
  @Input()
  public multiple = false;
  @Output()
  public PkgMaterial = new EventEmitter<PkgMaterial | null>();
  @Output()
  public PkgMaterials = new EventEmitter<ReadonlyArray<PkgMaterial> | null>();


  public isLoading = false;
  public optionList: ReadonlyArray<PkgMaterial> = [];
  public selectedPkgMaterial?: PkgMaterial;
  public searchChanges$ = new BehaviorSubject('');

  constructor(private pkgMaterialService: PkgMaterialService) { } 
  

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(
        debounceTime(130),
        switchMap((qstr) =>
          this.pkgMaterialService.apiPkgMaterialSearchPost({
            query: qstr,
            all: false,
          })
        )
      )
      .subscribe((x) => {
        this.optionList = x;
        this.isLoading = false;
      });
  }
  public onSearch(value: string): void {
    this.isLoading = true;
    this.searchChanges$.next(value);
  }
  public onModelChange(opt: PkgMaterial | ReadonlyArray<PkgMaterial> | null): void {
    if (this.multiple) {
      if (opt) {
        this.PkgMaterials.emit(opt as ReadonlyArray<PkgMaterial>);
      } else {
        this.PkgMaterials.emit(null);
      }
    } else {
      if (opt) {
        this.PkgMaterial.emit(opt as PkgMaterial);
      } else {
        this.PkgMaterial.emit(null);
      }
    }
  }
}
