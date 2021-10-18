import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadrentalagreementComponent } from './uploadrentalagreement.component';

describe('UploadrentalagreementComponent', () => {
  let component: UploadrentalagreementComponent;
  let fixture: ComponentFixture<UploadrentalagreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadrentalagreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadrentalagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
