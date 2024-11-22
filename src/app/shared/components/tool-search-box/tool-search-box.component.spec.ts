import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSearchBoxComponent } from './tool-search-box.component';

describe('ToolSearchBoxComponent', () => {
  let component: ToolSearchBoxComponent;
  let fixture: ComponentFixture<ToolSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolSearchBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
