import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTenantIDComponent } from './upload-tenant-id.component';

describe('UploadTenantIDComponent', () => {
  let component: UploadTenantIDComponent;
  let fixture: ComponentFixture<UploadTenantIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTenantIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTenantIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
