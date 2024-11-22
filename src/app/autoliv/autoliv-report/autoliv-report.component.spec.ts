import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolivReportComponent } from './autoliv-report.component';

describe('AutolivReportComponent', () => {
  let component: AutolivReportComponent;
  let fixture: ComponentFixture<AutolivReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolivReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutolivReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
