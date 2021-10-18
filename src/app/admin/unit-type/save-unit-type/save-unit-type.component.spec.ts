import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUnitTypeComponent } from './save-unit-type.component';

describe('SaveUnitTypeComponent', () => {
  let component: SaveUnitTypeComponent;
  let fixture: ComponentFixture<SaveUnitTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUnitTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUnitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
