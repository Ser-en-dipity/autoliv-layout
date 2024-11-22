import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSearchBoxComponent } from './supplier-search-box.component';

describe('SupplierSearchBoxComponent', () => {
  let component: SupplierSearchBoxComponent;
  let fixture: ComponentFixture<SupplierSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
