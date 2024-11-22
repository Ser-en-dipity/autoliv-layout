import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { SearchFilter } from './search-filter';
import { SearchOption } from './search-option.enum';

interface Selection {
  id: string;
  description: string;
}

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.less'],
})
export class SearchBoxComponent implements OnInit {
  @Input()
  public multiple = false;
  @Input()
  public inline = false;

  @Input()
  public optionVisible = true;

  @Input()
  public options: Array<SearchOption> = [];

  @Input()
  public selectedOption: SearchOption = SearchOption.Product;

  @Output()
  public results = new EventEmitter<Array<string>>();

  @Output()
  public filters = new EventEmitter<SearchFilter>();

  public selectedModels: Array<Selection> = [];
  public searchResults: Array<Selection> = [];
  public isLoading = false;
  public isCollapse = true;
  public advancedSearchForm = this.fb.group({});
  public confirmModal?: NzModalRef; // For testing by now

  constructor(private fb: UntypedFormBuilder, private modal: NzModalService) {}

  ngOnInit(): void {}

  public toggleCollapse(): void {
    this.advancedSearchForm.reset();
    if (this.isCollapse) {
      this.confirmModal = this.modal.confirm({
        nzTitle: '了解范围搜索?',
        nzContent:
          '一般情况下精确搜索已经可以满足要求，若需要范围搜索，请尽量将搜索范围缩小',
        nzOnOk: () =>
          new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 120);
          }).catch(() => {}),
      });
    }
    this.isCollapse = !this.isCollapse;
  }
  public resetForm(): void {
    this.advancedSearchForm.reset();
  }
}
