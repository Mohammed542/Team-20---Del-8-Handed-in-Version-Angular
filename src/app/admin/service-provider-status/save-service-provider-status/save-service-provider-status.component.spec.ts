import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveServiceProviderStatusComponent } from './save-service-provider-status.component';

describe('SaveServiceProviderStatusComponent', () => {
  let component: SaveServiceProviderStatusComponent;
  let fixture: ComponentFixture<SaveServiceProviderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveServiceProviderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveServiceProviderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
