import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRAComponent } from './upload-ra.component';

describe('UploadRAComponent', () => {
  let component: UploadRAComponent;
  let fixture: ComponentFixture<UploadRAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
