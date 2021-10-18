import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualchargeComponent } from './manualcharge.component';

describe('ManualchargeComponent', () => {
  let component: ManualchargeComponent;
  let fixture: ComponentFixture<ManualchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
