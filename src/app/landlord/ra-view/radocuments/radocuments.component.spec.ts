import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RADocumentsComponent } from './radocuments.component';

describe('RADocumentsComponent', () => {
  let component: RADocumentsComponent;
  let fixture: ComponentFixture<RADocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RADocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RADocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
