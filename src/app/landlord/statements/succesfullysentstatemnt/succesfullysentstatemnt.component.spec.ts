import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullysentstatemntComponent } from './succesfullysentstatemnt.component';

describe('SuccesfullysentstatemntComponent', () => {
  let component: SuccesfullysentstatemntComponent;
  let fixture: ComponentFixture<SuccesfullysentstatemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfullysentstatemntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfullysentstatemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
