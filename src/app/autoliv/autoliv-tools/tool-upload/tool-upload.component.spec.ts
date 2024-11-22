import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolUploadComponent } from './tool-upload.component';

describe('ToolUploadComponent', () => {
  let component: ToolUploadComponent;
  let fixture: ComponentFixture<ToolUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
