import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInspectionItemsComponent } from './view-inspection-items.component';

describe('ViewInspectionItemsComponent', () => {
  let component: ViewInspectionItemsComponent;
  let fixture: ComponentFixture<ViewInspectionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInspectionItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInspectionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
