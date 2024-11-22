import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotCheckTableComponent } from './spot-check-table.component';

describe('SpotCheckTableComponent', () => {
  let component: SpotCheckTableComponent;
  let fixture: ComponentFixture<SpotCheckTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotCheckTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotCheckTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
