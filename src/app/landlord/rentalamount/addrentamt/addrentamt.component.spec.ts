import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrentamtComponent } from './addrentamt.component';

describe('AddrentamtComponent', () => {
  let component: AddrentamtComponent;
  let fixture: ComponentFixture<AddrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
