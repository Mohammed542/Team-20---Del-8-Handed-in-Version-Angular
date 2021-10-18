import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalBillComponent } from './municipal-bill.component';

describe('MunicipalBillComponent', () => {
  let component: MunicipalBillComponent;
  let fixture: ComponentFixture<MunicipalBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
