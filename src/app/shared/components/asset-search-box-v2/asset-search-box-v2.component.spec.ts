import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSearchBoxV2Component } from './asset-search-box-v2.component';

describe('AssetSearchBoxV2Component', () => {
  let component: AssetSearchBoxV2Component;
  let fixture: ComponentFixture<AssetSearchBoxV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetSearchBoxV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetSearchBoxV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
