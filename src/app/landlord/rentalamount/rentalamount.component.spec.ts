import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalamountComponent } from './rentalamount.component';

describe('RentalamountComponent', () => {
  let component: RentalamountComponent;
  let fixture: ComponentFixture<RentalamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
