import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalatefaultComponent } from './escalatefault.component';

describe('EscalatefaultComponent', () => {
  let component: EscalatefaultComponent;
  let fixture: ComponentFixture<EscalatefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalatefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalatefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
