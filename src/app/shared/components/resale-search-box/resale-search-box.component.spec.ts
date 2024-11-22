import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleSearchBoxComponent } from './resale-search-box.component';

describe('ResaleSearchBoxComponent', () => {
  let component: ResaleSearchBoxComponent;
  let fixture: ComponentFixture<ResaleSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaleSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResaleSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
