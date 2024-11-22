import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchBoxComponent } from './customer-search-box.component';

describe('CustomerSearchBoxComponent', () => {
  let component: CustomerSearchBoxComponent;
  let fixture: ComponentFixture<CustomerSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
