import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfuluploadproofComponent } from './successfuluploadproof.component';

describe('SuccessfuluploadproofComponent', () => {
  let component: SuccessfuluploadproofComponent;
  let fixture: ComponentFixture<SuccessfuluploadproofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfuluploadproofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfuluploadproofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
