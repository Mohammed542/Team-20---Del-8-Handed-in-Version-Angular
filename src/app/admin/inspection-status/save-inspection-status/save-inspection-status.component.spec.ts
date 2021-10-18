import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveInspectionStatusComponent } from './save-inspection-status.component';

describe('SaveInspectionStatusComponent', () => {
  let component: SaveInspectionStatusComponent;
  let fixture: ComponentFixture<SaveInspectionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveInspectionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveInspectionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
