import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLandlordComponent } from './edit-landlord.component';

describe('EditLandlordComponent', () => {
  let component: EditLandlordComponent;
  let fixture: ComponentFixture<EditLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
