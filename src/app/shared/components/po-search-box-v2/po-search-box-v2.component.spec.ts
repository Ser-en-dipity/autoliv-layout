import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSearchBoxV2Component } from './po-search-box-v2.component';

describe('PoSearchBoxV2Component', () => {
  let component: PoSearchBoxV2Component;
  let fixture: ComponentFixture<PoSearchBoxV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoSearchBoxV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoSearchBoxV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
