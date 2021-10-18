import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccgenreceiptComponent } from './succgenreceipt.component';

describe('SuccgenreceiptComponent', () => {
  let component: SuccgenreceiptComponent;
  let fixture: ComponentFixture<SuccgenreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccgenreceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccgenreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
