import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSearchBoxComponent } from './orders-search-box.component';

describe('OrdersSearchBoxComponent', () => {
  let component: OrdersSearchBoxComponent;
  let fixture: ComponentFixture<OrdersSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
