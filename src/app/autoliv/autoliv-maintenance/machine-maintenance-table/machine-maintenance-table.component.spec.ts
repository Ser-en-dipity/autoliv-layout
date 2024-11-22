import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineMaintenanceTableComponent } from './machine-maintenance-table.component';

describe('MachineMaintenanceTableComponent', () => {
  let component: MachineMaintenanceTableComponent;
  let fixture: ComponentFixture<MachineMaintenanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineMaintenanceTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachineMaintenanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
