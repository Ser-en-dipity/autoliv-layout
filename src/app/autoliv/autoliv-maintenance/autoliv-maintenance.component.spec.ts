import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolivMaintenanceComponent } from './autoliv-maintenance.component';

describe('AutolivMaintenanceComponent', () => {
  let component: AutolivMaintenanceComponent;
  let fixture: ComponentFixture<AutolivMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolivMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutolivMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
