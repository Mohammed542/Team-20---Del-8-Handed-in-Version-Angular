import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderCetegoryComponent } from './service-provider-cetegory.component';

describe('ServiceProviderCetegoryComponent', () => {
  let component: ServiceProviderCetegoryComponent;
  let fixture: ComponentFixture<ServiceProviderCetegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderCetegoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderCetegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
