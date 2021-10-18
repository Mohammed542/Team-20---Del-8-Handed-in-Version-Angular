import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveInspectionTypeComponent } from './save-inspection-type.component';

describe('SaveInspectionTypeComponent', () => {
  let component: SaveInspectionTypeComponent;
  let fixture: ComponentFixture<SaveInspectionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveInspectionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveInspectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
