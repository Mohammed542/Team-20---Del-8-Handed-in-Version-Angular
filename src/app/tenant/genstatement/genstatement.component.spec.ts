import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenstatementComponent } from './genstatement.component';

describe('GenstatementComponent', () => {
  let component: GenstatementComponent;
  let fixture: ComponentFixture<GenstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
