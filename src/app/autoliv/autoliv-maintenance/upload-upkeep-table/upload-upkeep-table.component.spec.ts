import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUpkeepTableComponent } from './upload-upkeep-table.component';

describe('UploadUpkeepTableComponent', () => {
  let component: UploadUpkeepTableComponent;
  let fixture: ComponentFixture<UploadUpkeepTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadUpkeepTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadUpkeepTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
