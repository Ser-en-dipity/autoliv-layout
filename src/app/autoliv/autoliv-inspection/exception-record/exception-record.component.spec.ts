import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionRecordComponent } from './exception-record.component';

describe('ExceptionRecordComponent', () => {
  let component: ExceptionRecordComponent;
  let fixture: ComponentFixture<ExceptionRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExceptionRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExceptionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
