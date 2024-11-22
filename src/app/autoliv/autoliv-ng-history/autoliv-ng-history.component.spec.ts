import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolivNgHistoryComponent } from './autoliv-ng-history.component';

describe('AutolivNgHistoryComponent', () => {
  let component: AutolivNgHistoryComponent;
  let fixture: ComponentFixture<AutolivNgHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolivNgHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutolivNgHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
