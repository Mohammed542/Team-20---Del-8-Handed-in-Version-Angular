import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucscreatelandlordComponent } from './sucscreatelandlord.component';

describe('SucscreatelandlordComponent', () => {
  let component: SucscreatelandlordComponent;
  let fixture: ComponentFixture<SucscreatelandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucscreatelandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucscreatelandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
