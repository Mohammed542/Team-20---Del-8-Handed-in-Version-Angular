import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBuiidingComponent } from './update-buiiding.component';

describe('UpdateBuiidingComponent', () => {
  let component: UpdateBuiidingComponent;
  let fixture: ComponentFixture<UpdateBuiidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBuiidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBuiidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
