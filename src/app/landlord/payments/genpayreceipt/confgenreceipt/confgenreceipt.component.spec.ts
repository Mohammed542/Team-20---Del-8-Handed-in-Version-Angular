import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfgenreceiptComponent } from './confgenreceipt.component';

describe('ConfgenreceiptComponent', () => {
  let component: ConfgenreceiptComponent;
  let fixture: ComponentFixture<ConfgenreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfgenreceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfgenreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
