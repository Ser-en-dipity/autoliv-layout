import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceOperationInstructionComponent } from './device-operation-instruction.component';

describe('DeviceOperationInstructionComponent', () => {
  let component: DeviceOperationInstructionComponent;
  let fixture: ComponentFixture<DeviceOperationInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceOperationInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceOperationInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
