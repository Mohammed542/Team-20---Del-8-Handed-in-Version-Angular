import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenpayreceiptComponent } from './genpayreceipt.component';

describe('GenpayreceiptComponent', () => {
  let component: GenpayreceiptComponent;
  let fixture: ComponentFixture<GenpayreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenpayreceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenpayreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
