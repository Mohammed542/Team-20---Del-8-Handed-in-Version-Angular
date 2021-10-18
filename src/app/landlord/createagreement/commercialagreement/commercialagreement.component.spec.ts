import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialagreementComponent } from './commercialagreement.component';

describe('CommercialagreementComponent', () => {
  let component: CommercialagreementComponent;
  let fixture: ComponentFixture<CommercialagreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialagreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
