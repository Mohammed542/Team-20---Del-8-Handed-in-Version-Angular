import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinspectionComponent } from './viewinspection.component';

describe('ViewinspectionComponent', () => {
  let component: ViewinspectionComponent;
  let fixture: ComponentFixture<ViewinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
