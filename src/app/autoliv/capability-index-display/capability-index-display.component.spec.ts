import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityIndexDisplayComponent } from './capability-index-display.component';

describe('CapabilityIndexDisplayComponent', () => {
  let component: CapabilityIndexDisplayComponent;
  let fixture: ComponentFixture<CapabilityIndexDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapabilityIndexDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapabilityIndexDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
