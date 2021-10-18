import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmaintenanceComponent } from './viewmaintenance.component';

describe('ViewmaintenanceComponent', () => {
  let component: ViewmaintenanceComponent;
  let fixture: ComponentFixture<ViewmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
