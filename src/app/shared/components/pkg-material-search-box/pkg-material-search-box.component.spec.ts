import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgMaterialSearchBoxComponent } from './pkg-material-search-box.component';

describe('PkgMaterialSearchBoxComponent', () => {
  let component: PkgMaterialSearchBoxComponent;
  let fixture: ComponentFixture<PkgMaterialSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkgMaterialSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgMaterialSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
