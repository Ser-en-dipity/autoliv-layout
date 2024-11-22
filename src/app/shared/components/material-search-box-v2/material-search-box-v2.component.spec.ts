import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSearchBoxV2Component } from './material-search-box-v2.component';

describe('MaterialSearchBoxV2Component', () => {
  let component: MaterialSearchBoxV2Component;
  let fixture: ComponentFixture<MaterialSearchBoxV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSearchBoxV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialSearchBoxV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
