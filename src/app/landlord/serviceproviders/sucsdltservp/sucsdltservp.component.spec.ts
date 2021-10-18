import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsdltservpComponent } from './sucsdltservp.component';

describe('SucsdltservpComponent', () => {
  let component: SucsdltservpComponent;
  let fixture: ComponentFixture<SucsdltservpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsdltservpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsdltservpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
