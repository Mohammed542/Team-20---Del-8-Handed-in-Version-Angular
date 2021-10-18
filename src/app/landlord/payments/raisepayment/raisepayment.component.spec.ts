import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisepaymentComponent } from './raisepayment.component';

describe('RaisepaymentComponent', () => {
  let component: RaisepaymentComponent;
  let fixture: ComponentFixture<RaisepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
