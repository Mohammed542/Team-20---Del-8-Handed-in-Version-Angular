import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcreatespComponent } from './confcreatesp.component';

describe('ConfcreatespComponent', () => {
  let component: ConfcreatespComponent;
  let fixture: ComponentFixture<ConfcreatespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfcreatespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcreatespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
