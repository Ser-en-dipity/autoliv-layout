import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchBoxV2Component } from './product-search-box-v2.component';

describe('ProductSearchBoxV2Component', () => {
  let component: ProductSearchBoxV2Component;
  let fixture: ComponentFixture<ProductSearchBoxV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchBoxV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchBoxV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
