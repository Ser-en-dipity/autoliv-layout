import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBomDocComponent } from './tool-bom-doc.component';

describe('ToolBomDocComponent', () => {
  let component: ToolBomDocComponent;
  let fixture: ComponentFixture<ToolBomDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolBomDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolBomDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
