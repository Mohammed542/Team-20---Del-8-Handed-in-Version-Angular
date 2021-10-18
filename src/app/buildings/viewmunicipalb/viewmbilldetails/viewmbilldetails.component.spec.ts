import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmbilldetailsComponent } from './viewmbilldetails.component';

describe('ViewmbilldetailsComponent', () => {
  let component: ViewmbilldetailsComponent;
  let fixture: ComponentFixture<ViewmbilldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmbilldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmbilldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
