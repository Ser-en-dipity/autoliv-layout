import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSearchBoxComponent } from './material-search-box.component';

describe('MaterialSearchBoxComponent', () => {
  let component: MaterialSearchBoxComponent;
  let fixture: ComponentFixture<MaterialSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
