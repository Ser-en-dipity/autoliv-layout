import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolInspectionTableComponent } from './patrol-inspection-table.component';

describe('PatrolInspectionTableComponent', () => {
  let component: PatrolInspectionTableComponent;
  let fixture: ComponentFixture<PatrolInspectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrolInspectionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatrolInspectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
