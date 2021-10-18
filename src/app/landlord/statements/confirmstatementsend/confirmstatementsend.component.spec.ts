import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmstatementsendComponent } from './confirmstatementsend.component';

describe('ConfirmstatementsendComponent', () => {
  let component: ConfirmstatementsendComponent;
  let fixture: ComponentFixture<ConfirmstatementsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmstatementsendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmstatementsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
