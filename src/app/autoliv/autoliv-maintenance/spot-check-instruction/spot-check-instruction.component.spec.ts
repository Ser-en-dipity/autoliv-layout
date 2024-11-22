import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotCheckInstructionComponent } from './spot-check-instruction.component';

describe('SpotCheckInstructionComponent', () => {
  let component: SpotCheckInstructionComponent;
  let fixture: ComponentFixture<SpotCheckInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotCheckInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotCheckInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
