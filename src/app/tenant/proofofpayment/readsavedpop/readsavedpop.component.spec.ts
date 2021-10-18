import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadsavedpopComponent } from './readsavedpop.component';

describe('ReadsavedpopComponent', () => {
  let component: ReadsavedpopComponent;
  let fixture: ComponentFixture<ReadsavedpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadsavedpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadsavedpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
