import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCIPCComponent } from './upload-cipc.component';

describe('UploadCIPCComponent', () => {
  let component: UploadCIPCComponent;
  let fixture: ComponentFixture<UploadCIPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCIPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCIPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
