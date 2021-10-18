import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuildinginfoComponent } from './viewbuildinginfo.component';

describe('ViewbuildinginfoComponent', () => {
  let component: ViewbuildinginfoComponent;
  let fixture: ComponentFixture<ViewbuildinginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbuildinginfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuildinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
