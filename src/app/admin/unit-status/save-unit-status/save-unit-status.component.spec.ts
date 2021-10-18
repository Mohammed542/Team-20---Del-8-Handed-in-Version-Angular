import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUnitStatusComponent } from './save-unit-status.component';

describe('SaveUnitStatusComponent', () => {
  let component: SaveUnitStatusComponent;
  let fixture: ComponentFixture<SaveUnitStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUnitStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUnitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
