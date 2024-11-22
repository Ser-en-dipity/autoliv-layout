import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSpotCheckComponent } from './upload-spot-check.component';

describe('UploadSpotCheckComponent', () => {
  let component: UploadSpotCheckComponent;
  let fixture: ComponentFixture<UploadSpotCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSpotCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadSpotCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
