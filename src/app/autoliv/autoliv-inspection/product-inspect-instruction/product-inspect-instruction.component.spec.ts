import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInspectInstructionComponent } from './product-inspect-instruction.component';

describe('ProductInspectInstructionComponent', () => {
  let component: ProductInspectInstructionComponent;
  let fixture: ComponentFixture<ProductInspectInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInspectInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInspectInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
