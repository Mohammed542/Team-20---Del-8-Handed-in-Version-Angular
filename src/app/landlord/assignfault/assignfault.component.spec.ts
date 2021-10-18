import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignfaultComponent } from './assignfault.component';

describe('AssignfaultComponent', () => {
  let component: AssignfaultComponent;
  let fixture: ComponentFixture<AssignfaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignfaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignfaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
