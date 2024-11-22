import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftFlowComponent } from './craft-flow.component';

describe('CraftFlowComponent', () => {
  let component: CraftFlowComponent;
  let fixture: ComponentFixture<CraftFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CraftFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
