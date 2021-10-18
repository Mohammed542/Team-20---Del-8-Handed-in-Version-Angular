import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuiidingComponent } from './add-buiiding.component';

describe('AddBuiidingComponent', () => {
  let component: AddBuiidingComponent;
  let fixture: ComponentFixture<AddBuiidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuiidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuiidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
