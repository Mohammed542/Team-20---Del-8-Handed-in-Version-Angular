import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcreatelandlordComponent } from './confcreatelandlord.component';

describe('ConfcreatelandlordComponent', () => {
  let component: ConfcreatelandlordComponent;
  let fixture: ComponentFixture<ConfcreatelandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfcreatelandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcreatelandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
