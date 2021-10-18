import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeninvoiceComponent } from './geninvoice.component';

describe('GeninvoiceComponent', () => {
  let component: GeninvoiceComponent;
  let fixture: ComponentFixture<GeninvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeninvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeninvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
