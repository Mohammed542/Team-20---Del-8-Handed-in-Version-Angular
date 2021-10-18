import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmuploadproofComponent } from './confirmuploadproof.component';

describe('ConfirmuploadproofComponent', () => {
  let component: ConfirmuploadproofComponent;
  let fixture: ComponentFixture<ConfirmuploadproofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmuploadproofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmuploadproofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
