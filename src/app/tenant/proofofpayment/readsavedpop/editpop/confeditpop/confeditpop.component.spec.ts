import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeditpopComponent } from './confeditpop.component';

describe('ConfeditpopComponent', () => {
  let component: ConfeditpopComponent;
  let fixture: ComponentFixture<ConfeditpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfeditpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfeditpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
