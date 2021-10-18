import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMaintenanceTypeComponent } from './save-maintenance-type.component';

describe('SaveMaintenanceTypeComponent', () => {
  let component: SaveMaintenanceTypeComponent;
  let fixture: ComponentFixture<SaveMaintenanceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMaintenanceTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMaintenanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
