import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchBoxComponent } from './product-search-box.component';

describe('ProductSearchBoxComponent', () => {
  let component: ProductSearchBoxComponent;
  let fixture: ComponentFixture<ProductSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
