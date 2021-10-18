import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsEditTenantComponent } from './sucs-edit-tenant.component';

describe('SucsEditTenantComponent', () => {
  let component: SucsEditTenantComponent;
  let fixture: ComponentFixture<SucsEditTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsEditTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsEditTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
