import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaUploadComponent } from './ra-upload.component';

describe('RaUploadComponent', () => {
  let component: RaUploadComponent;
  let fixture: ComponentFixture<RaUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
