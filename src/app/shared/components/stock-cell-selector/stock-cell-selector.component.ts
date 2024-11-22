import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { STOCK_TYPE } from '__generated__/globalTypes';
import { GET_ALL_STOCK_CELLS_OF_TYPE } from './get_stock_cell_of_type';
import { GetAllStockCellsOfType } from './__generated__/GetAllStockCellsOfType';

@Component({
  selector: 'app-stock-cell-selector',
  templateUrl: './stock-cell-selector.component.html',
  styleUrls: ['./stock-cell-selector.component.less'],
})
export class StockCellSelectorComponent implements OnInit {
  @Output()
  public stockCell = new EventEmitter<{
    value: string;
    label: string;
  } | null>();

  public form: UntypedFormGroup = this.fb.group({
    stockType: [null, [Validators.required]],
    stockCell: [null, [Validators.required]],
    stockId: [null, [Validators.required]],
    stockName: [null, [Validators.required]],
  });
  constructor(private apollo: Apollo, private fb: UntypedFormBuilder) {}
  public stockCells: Array<{ value: string; label: string }> = [];
  public get StockTypes(): Array<STOCK_TYPE> {
    return Object.values(STOCK_TYPE);
  }

  public onStockTypeModelChange(s: STOCK_TYPE): void {
    this.apollo
      .query<GetAllStockCellsOfType>({
        query: GET_ALL_STOCK_CELLS_OF_TYPE,
        variables: { input: { type: s, types: [] } },
        fetchPolicy: 'no-cache',
      })
      .pipe(map((x) => x.data.core?.stockCells))
      .subscribe((cells) => {
        this.stockCells =
          cells?.map((cell) => ({
            value: cell!.id,
            label:
              cell?.code === cell?.name
                ? cell!.code
                : `${cell?.code}/${cell?.name}`,
          })) ?? [];
      });
  }

  public onStockModelChange(
    s: { value: string; label: string } | undefined
  ): void {
    if (s) {
      this.form.controls.stockId.setValue(s.value);
      this.form.controls.stockName.setValue(
        s.label.substring(
          0,
          s.label.indexOf('/') === -1 ? s.label.length : s.label.indexOf('/')
        )
      );
    }
    for (const key in this.form.controls) {
      if (!this.form.controls[key].valid) {
        this.stockCell.emit(null);
        return;
      }
    }

    this.stockCell.emit({
      value: this.form.controls.stockId.value,
      label: this.form.controls.stockName.value,
    });
  }

  ngOnInit(): void {}
}
