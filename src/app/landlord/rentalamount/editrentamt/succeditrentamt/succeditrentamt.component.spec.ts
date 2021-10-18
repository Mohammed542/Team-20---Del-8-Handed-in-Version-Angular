import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucceditrentamtComponent } from './succeditrentamt.component';

describe('SucceditrentamtComponent', () => {
  let component: SucceditrentamtComponent;
  let fixture: ComponentFixture<SucceditrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucceditrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucceditrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
