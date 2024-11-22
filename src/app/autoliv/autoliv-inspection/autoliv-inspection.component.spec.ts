import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolivInspectionComponent } from './autoliv-inspection.component';

describe('AutolivInspectionComponent', () => {
  let component: AutolivInspectionComponent;
  let fixture: ComponentFixture<AutolivInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolivInspectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutolivInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
