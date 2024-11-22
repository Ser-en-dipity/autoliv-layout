import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCheckTableComponent } from './self-check-table.component';

describe('SelfCheckTableComponent', () => {
  let component: SelfCheckTableComponent;
  let fixture: ComponentFixture<SelfCheckTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfCheckTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfCheckTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
