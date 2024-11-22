import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorCheckRecordComponent } from './inspector-check-record.component';

describe('InspectorCheckRecordComponent', () => {
  let component: InspectorCheckRecordComponent;
  let fixture: ComponentFixture<InspectorCheckRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectorCheckRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectorCheckRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
