import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfaultComponent } from './searchfault.component';

describe('SearchfaultComponent', () => {
  let component: SearchfaultComponent;
  let fixture: ComponentFixture<SearchfaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchfaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
