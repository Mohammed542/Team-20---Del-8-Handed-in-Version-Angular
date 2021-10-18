import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfEditTenantComponent } from './conf-edit-tenant.component';

describe('ConfEditTenantComponent', () => {
  let component: ConfEditTenantComponent;
  let fixture: ComponentFixture<ConfEditTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfEditTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfEditTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
