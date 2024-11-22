import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCellSelectorComponent } from './stock-cell-selector.component';

describe('StockCellSelectorComponent', () => {
  let component: StockCellSelectorComponent;
  let fixture: ComponentFixture<StockCellSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCellSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCellSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
