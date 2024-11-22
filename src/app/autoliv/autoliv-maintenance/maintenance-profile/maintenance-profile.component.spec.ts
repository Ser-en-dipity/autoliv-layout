import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceProfileComponent } from './maintenance-profile.component';

describe('MaintenanceProfileComponent', () => {
  let component: MaintenanceProfileComponent;
  let fixture: ComponentFixture<MaintenanceProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintenanceProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
