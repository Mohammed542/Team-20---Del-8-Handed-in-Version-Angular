import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeditservpComponent } from './confeditservp.component';

describe('ConfeditservpComponent', () => {
  let component: ConfeditservpComponent;
  let fixture: ComponentFixture<ConfeditservpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfeditservpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfeditservpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
