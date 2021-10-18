import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfaultComponent } from './viewfault.component';

describe('ViewfaultComponent', () => {
  let component: ViewfaultComponent;
  let fixture: ComponentFixture<ViewfaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
