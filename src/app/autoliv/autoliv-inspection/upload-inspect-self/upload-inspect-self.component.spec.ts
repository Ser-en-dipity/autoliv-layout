import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInspectSelfComponent } from './upload-inspect-self.component';

describe('UploadInspectSelfComponent', () => {
  let component: UploadInspectSelfComponent;
  let fixture: ComponentFixture<UploadInspectSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadInspectSelfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadInspectSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
