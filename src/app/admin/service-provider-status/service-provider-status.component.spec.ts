import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderStatusComponent } from './service-provider-status.component';

describe('ServiceProviderStatusComponent', () => {
  let component: ServiceProviderStatusComponent;
  let fixture: ComponentFixture<ServiceProviderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
