import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipallBill2Component } from './municipall-bill2.component';

describe('MunicipallBill2Component', () => {
  let component: MunicipallBill2Component;
  let fixture: ComponentFixture<MunicipallBill2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipallBill2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipallBill2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
