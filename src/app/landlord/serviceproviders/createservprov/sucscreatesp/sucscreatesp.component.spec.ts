import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucscreatespComponent } from './sucscreatesp.component';

describe('SucscreatespComponent', () => {
  let component: SucscreatespComponent;
  let fixture: ComponentFixture<SucscreatespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucscreatespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucscreatespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
