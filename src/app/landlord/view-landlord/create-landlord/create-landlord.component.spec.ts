import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLandlordComponent } from './create-landlord.component';

describe('CreateLandlordComponent', () => {
  let component: CreateLandlordComponent;
  let fixture: ComponentFixture<CreateLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
