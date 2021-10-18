import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccgenstatementComponent } from './succgenstatement.component';

describe('SuccgenstatementComponent', () => {
  let component: SuccgenstatementComponent;
  let fixture: ComponentFixture<SuccgenstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccgenstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccgenstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
