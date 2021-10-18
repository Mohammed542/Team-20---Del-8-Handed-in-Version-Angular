import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessautochargeComponent } from './successautocharge.component';

describe('SuccessautochargeComponent', () => {
  let component: SuccessautochargeComponent;
  let fixture: ComponentFixture<SuccessautochargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessautochargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessautochargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
