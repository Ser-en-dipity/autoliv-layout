import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolivToolsComponent } from './autoliv-tools.component';

describe('AutolivToolsComponent', () => {
  let component: AutolivToolsComponent;
  let fixture: ComponentFixture<AutolivToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolivToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutolivToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
