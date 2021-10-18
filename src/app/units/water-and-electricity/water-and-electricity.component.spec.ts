import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterAndElectricityComponent } from './water-and-electricity.component';

describe('WaterAndElectricityComponent', () => {
  let component: WaterAndElectricityComponent;
  let fixture: ComponentFixture<WaterAndElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterAndElectricityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterAndElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
