import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucseditservpComponent } from './sucseditservp.component';

describe('SucseditservpComponent', () => {
  let component: SucseditservpComponent;
  let fixture: ComponentFixture<SucseditservpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucseditservpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucseditservpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
