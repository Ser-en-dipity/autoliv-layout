import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSearchFormComponent } from './external-search-form.component';

describe('ExternalSearchFormComponent', () => {
  let component: ExternalSearchFormComponent;
  let fixture: ComponentFixture<ExternalSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
