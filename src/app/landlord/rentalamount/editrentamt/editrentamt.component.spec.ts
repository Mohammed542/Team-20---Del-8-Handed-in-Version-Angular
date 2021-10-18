import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrentamtComponent } from './editrentamt.component';

describe('EditrentamtComponent', () => {
  let component: EditrentamtComponent;
  let fixture: ComponentFixture<EditrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
