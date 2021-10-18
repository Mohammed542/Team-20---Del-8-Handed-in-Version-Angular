import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMaintenanceStatusComponent } from './save-maintenance-status.component';

describe('SaveMaintenanceStatusComponent', () => {
  let component: SaveMaintenanceStatusComponent;
  let fixture: ComponentFixture<SaveMaintenanceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMaintenanceStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMaintenanceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
