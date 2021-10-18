import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmaintenanceComponent } from './searchmaintenance.component';

describe('SearchmaintenanceComponent', () => {
  let component: SearchmaintenanceComponent;
  let fixture: ComponentFixture<SearchmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
