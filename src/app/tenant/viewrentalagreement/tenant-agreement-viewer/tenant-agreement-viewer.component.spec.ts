import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantAgreementViewerComponent } from './tenant-agreement-viewer.component';

describe('TenantAgreementViewerComponent', () => {
  let component: TenantAgreementViewerComponent;
  let fixture: ComponentFixture<TenantAgreementViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantAgreementViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantAgreementViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
