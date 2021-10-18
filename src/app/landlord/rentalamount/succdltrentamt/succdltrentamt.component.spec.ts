import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccdltrentamtComponent } from './succdltrentamt.component';

describe('SuccdltrentamtComponent', () => {
  let component: SuccdltrentamtComponent;
  let fixture: ComponentFixture<SuccdltrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccdltrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccdltrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
