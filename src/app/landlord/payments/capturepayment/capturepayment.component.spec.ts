import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturepaymentComponent } from './capturepayment.component';

describe('CapturepaymentComponent', () => {
  let component: CapturepaymentComponent;
  let fixture: ComponentFixture<CapturepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
