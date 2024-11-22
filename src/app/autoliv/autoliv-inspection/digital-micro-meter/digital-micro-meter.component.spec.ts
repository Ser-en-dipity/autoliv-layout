import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMicroMeterComponent } from './digital-micro-meter.component';

describe('DigitalMicroMeterComponent', () => {
  let component: DigitalMicroMeterComponent;
  let fixture: ComponentFixture<DigitalMicroMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMicroMeterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalMicroMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
