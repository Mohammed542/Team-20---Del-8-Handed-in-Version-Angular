import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTenantComponent } from './help-tenant.component';

describe('HelpTenantComponent', () => {
  let component: HelpTenantComponent;
  let fixture: ComponentFixture<HelpTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
