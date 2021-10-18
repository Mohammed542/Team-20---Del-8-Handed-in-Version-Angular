import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitsComponent } from './update-units.component';

describe('UpdateUnitsComponent', () => {
  let component: UpdateUnitsComponent;
  let fixture: ComponentFixture<UpdateUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
