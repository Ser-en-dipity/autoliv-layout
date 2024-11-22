import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetStockDetailModalComponent } from './asset-stock-detail-modal.component';

describe('AssetStockDetailModalComponent', () => {
  let component: AssetStockDetailModalComponent;
  let fixture: ComponentFixture<AssetStockDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetStockDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetStockDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
