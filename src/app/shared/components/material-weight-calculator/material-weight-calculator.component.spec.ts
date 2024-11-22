import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialWeightCalculatorComponent } from './material-weight-calculator.component';

describe('MaterialWeightCalculatorComponent', () => {
  let component: MaterialWeightCalculatorComponent;
  let fixture: ComponentFixture<MaterialWeightCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialWeightCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialWeightCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
