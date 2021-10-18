import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutochargeComponent } from './autocharge.component';

describe('AutochargeComponent', () => {
  let component: AutochargeComponent;
  let fixture: ComponentFixture<AutochargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutochargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutochargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
