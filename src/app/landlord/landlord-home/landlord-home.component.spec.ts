import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordHomeComponent } from './landlord-home.component';

describe('LandlordHomeComponent', () => {
  let component: LandlordHomeComponent;
  let fixture: ComponentFixture<LandlordHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
