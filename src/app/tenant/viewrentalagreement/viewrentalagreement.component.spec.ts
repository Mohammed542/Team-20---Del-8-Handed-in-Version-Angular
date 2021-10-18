import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrentalagreementComponent } from './viewrentalagreement.component';

describe('ViewrentalagreementComponent', () => {
  let component: ViewrentalagreementComponent;
  let fixture: ComponentFixture<ViewrentalagreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrentalagreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrentalagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
