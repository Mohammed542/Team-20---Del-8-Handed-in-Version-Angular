import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsfleditpopComponent } from './ssfleditpop.component';

describe('SsfleditpopComponent', () => {
  let component: SsfleditpopComponent;
  let fixture: ComponentFixture<SsfleditpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsfleditpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsfleditpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
