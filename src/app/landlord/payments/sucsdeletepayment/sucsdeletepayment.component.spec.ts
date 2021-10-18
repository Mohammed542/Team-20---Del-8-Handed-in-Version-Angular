import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsdeletepaymentComponent } from './sucsdeletepayment.component';

describe('SucsdeletepaymentComponent', () => {
  let component: SucsdeletepaymentComponent;
  let fixture: ComponentFixture<SucsdeletepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsdeletepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsdeletepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
