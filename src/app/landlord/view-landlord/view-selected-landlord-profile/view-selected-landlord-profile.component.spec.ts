import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectedLandlordProfileComponent } from './view-selected-landlord-profile.component';

describe('ViewSelectedLandlordProfileComponent', () => {
  let component: ViewSelectedLandlordProfileComponent;
  let fixture: ComponentFixture<ViewSelectedLandlordProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectedLandlordProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelectedLandlordProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
