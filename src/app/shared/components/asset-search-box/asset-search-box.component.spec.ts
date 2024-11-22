import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSearchBoxComponent } from './asset-search-box.component';

describe('AssetSearchBoxComponent', () => {
  let component: AssetSearchBoxComponent;
  let fixture: ComponentFixture<AssetSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
