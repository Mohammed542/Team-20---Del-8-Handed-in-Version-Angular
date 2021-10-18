import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCompanyIDComponent } from './upload-company-id.component';

describe('UploadCompanyIDComponent', () => {
  let component: UploadCompanyIDComponent;
  let fixture: ComponentFixture<UploadCompanyIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCompanyIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCompanyIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
