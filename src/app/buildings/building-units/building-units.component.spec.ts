import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingUnitsComponent } from './building-units.component';

describe('BuildingUnitsComponent', () => {
  let component: BuildingUnitsComponent;
  let fixture: ComponentFixture<BuildingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
