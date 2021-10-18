import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsfulmanualchargeComponent } from './sucsfulmanualcharge.component';

describe('SucsfulmanualchargeComponent', () => {
  let component: SucsfulmanualchargeComponent;
  let fixture: ComponentFixture<SucsfulmanualchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsfulmanualchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsfulmanualchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
