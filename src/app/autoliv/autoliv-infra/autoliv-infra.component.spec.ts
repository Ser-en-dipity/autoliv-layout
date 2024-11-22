import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolivInfraComponent } from './autoliv-infra.component';

describe('AutolivInfraComponent', () => {
  let component: AutolivInfraComponent;
  let fixture: ComponentFixture<AutolivInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutolivInfraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutolivInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
