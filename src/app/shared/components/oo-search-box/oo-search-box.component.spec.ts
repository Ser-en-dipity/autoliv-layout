import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OoSearchBoxComponent } from './oo-search-box.component';

describe('OoSearchBoxComponent', () => {
  let component: OoSearchBoxComponent;
  let fixture: ComponentFixture<OoSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OoSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OoSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
