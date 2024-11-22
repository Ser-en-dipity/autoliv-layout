import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMachineCodeComponent } from './input-machine-code.component';

describe('InputMachineCodeComponent', () => {
  let component: InputMachineCodeComponent;
  let fixture: ComponentFixture<InputMachineCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMachineCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputMachineCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
