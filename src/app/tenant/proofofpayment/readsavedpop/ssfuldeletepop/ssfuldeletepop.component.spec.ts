import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsfuldeletepopComponent } from './ssfuldeletepop.component';

describe('SsfuldeletepopComponent', () => {
  let component: SsfuldeletepopComponent;
  let fixture: ComponentFixture<SsfuldeletepopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsfuldeletepopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsfuldeletepopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
