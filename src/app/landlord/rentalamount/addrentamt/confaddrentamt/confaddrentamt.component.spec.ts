import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfaddrentamtComponent } from './confaddrentamt.component';

describe('ConfaddrentamtComponent', () => {
  let component: ConfaddrentamtComponent;
  let fixture: ComponentFixture<ConfaddrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfaddrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfaddrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
