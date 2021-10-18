import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpopComponent } from './viewpop.component';

describe('ViewpopComponent', () => {
  let component: ViewpopComponent;
  let fixture: ComponentFixture<ViewpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
