import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSearchBoxComponent } from './po-search-box.component';

describe('PoSearchBoxComponent', () => {
  let component: PoSearchBoxComponent;
  let fixture: ComponentFixture<PoSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
