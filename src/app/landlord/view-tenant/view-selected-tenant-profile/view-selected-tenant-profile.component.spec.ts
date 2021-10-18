import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectedTenantProfileComponent } from './view-selected-tenant-profile.component';

describe('ViewSelectedTenantProfileComponent', () => {
  let component: ViewSelectedTenantProfileComponent;
  let fixture: ComponentFixture<ViewSelectedTenantProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectedTenantProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelectedTenantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
