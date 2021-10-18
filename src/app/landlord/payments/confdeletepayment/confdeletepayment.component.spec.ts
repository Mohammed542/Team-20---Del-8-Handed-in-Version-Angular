import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdeletepaymentComponent } from './confdeletepayment.component';

describe('ConfdeletepaymentComponent', () => {
  let component: ConfdeletepaymentComponent;
  let fixture: ComponentFixture<ConfdeletepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdeletepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfdeletepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
