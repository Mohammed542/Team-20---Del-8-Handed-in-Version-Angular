import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureWaterAndElectrcityComponent } from './capture-water-and-electrcity.component';

describe('CaptureWaterAndElectrcityComponent', () => {
  let component: CaptureWaterAndElectrcityComponent;
  let fixture: ComponentFixture<CaptureWaterAndElectrcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureWaterAndElectrcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureWaterAndElectrcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
