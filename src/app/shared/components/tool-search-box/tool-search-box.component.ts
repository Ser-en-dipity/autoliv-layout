import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tool, ToolsService } from 'src/openapi';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tool-search-box',
  templateUrl: './tool-search-box.component.html',
  styleUrl: './tool-search-box.component.less'
})
export class ToolSearchBoxComponent implements OnInit {
  @Output()
  public tool = new EventEmitter<string | null>();
  @Output()
  public loading = new EventEmitter<boolean>();

  public isLoading = true;
  public searchChanges$ = new BehaviorSubject('');
  public options: Array<Tool> = [];
  public selectedTool?: Array<Tool>;

  constructor(private toolsService: ToolsService) {
    this.loading.next(false);
  }

  ngOnInit(): void {
    this.searchChanges$
      .asObservable()
      .pipe(debounceTime(180))
      .subscribe((x) => {
        this.toolsService.apiToolsSearchPost({ query: x }).subscribe((resp) => {
          this.options = resp;
          this.isLoading = false;
          this.loading.next(this.isLoading);
        });
      });
  }

  public onModelChange(t: Tool): void {
    if (this.selectedTool) {
      this.tool.emit(t.id);
    } else {
      this.tool.emit(null);
    }
  }

  public onSearch(v: string): void {
    this.isLoading = true;
    this.loading.next(this.isLoading);
    this.searchChanges$.next(v);
  }
}