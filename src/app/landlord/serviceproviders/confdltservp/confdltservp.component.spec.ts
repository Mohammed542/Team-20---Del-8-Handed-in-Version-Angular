import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdltservpComponent } from './confdltservp.component';

describe('ConfdltservpComponent', () => {
  let component: ConfdltservpComponent;
  let fixture: ComponentFixture<ConfdltservpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdltservpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfdltservpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
