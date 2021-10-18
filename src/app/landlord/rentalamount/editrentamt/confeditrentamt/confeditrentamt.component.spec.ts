import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeditrentamtComponent } from './confeditrentamt.component';

describe('ConfeditrentamtComponent', () => {
  let component: ConfeditrentamtComponent;
  let fixture: ComponentFixture<ConfeditrentamtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfeditrentamtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfeditrentamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
