import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineSearchBoxComponent } from './machine-search-box.component';

describe('MachineSearchBoxComponent', () => {
  let component: MachineSearchBoxComponent;
  let fixture: ComponentFixture<MachineSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
