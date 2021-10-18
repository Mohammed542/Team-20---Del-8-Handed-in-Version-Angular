import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfmanualchargeComponent } from './confmanualcharge.component';

describe('ConfmanualchargeComponent', () => {
  let component: ConfmanualchargeComponent;
  let fixture: ComponentFixture<ConfmanualchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfmanualchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfmanualchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
