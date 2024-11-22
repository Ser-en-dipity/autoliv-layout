import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoSearchBoxComponent } from './mo-search-box.component';

describe('MoSearchBoxComponent', () => {
  let component: MoSearchBoxComponent;
  let fixture: ComponentFixture<MoSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
