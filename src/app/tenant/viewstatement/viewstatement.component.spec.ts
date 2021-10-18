import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstatementComponent } from './viewstatement.component';

describe('ViewstatementComponent', () => {
  let component: ViewstatementComponent;
  let fixture: ComponentFixture<ViewstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
