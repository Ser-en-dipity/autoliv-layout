import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolivDrawingComponent } from './autoliv-drawing.component';

describe('AutolivDrawingComponent', () => {
  let component: AutolivDrawingComponent;
  let fixture: ComponentFixture<AutolivDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolivDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutolivDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
