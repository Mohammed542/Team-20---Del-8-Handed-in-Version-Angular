import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdltrentamtComponent } from './confdltrentamt.component';

describe('ConfdltrentamtComponent', () => {
  let component: ConfdltrentamtComponent;
  let fixture: ComponentFixture<ConfdltrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdltrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfdltrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
