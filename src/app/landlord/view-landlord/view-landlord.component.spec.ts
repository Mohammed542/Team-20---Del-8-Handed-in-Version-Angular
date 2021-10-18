import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLandlordComponent } from './view-landlord.component';

describe('ViewLandlordComponent', () => {
  let component: ViewLandlordComponent;
  let fixture: ComponentFixture<ViewLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
