import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccaddrentamtComponent } from './succaddrentamt.component';

describe('SuccaddrentamtComponent', () => {
  let component: SuccaddrentamtComponent;
  let fixture: ComponentFixture<SuccaddrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccaddrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccaddrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
