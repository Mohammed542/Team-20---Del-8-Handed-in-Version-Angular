import { ComponentFixture, TestBed } from '@angular/core/testing';

import {RADocumentViewerComponentCIPC } from './radocument-viewer.component';

describe('RADocumentViewerComponentCIPC', () => {
  let component: RADocumentViewerComponentCIPC;
  let fixture: ComponentFixture<RADocumentViewerComponentCIPC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RADocumentViewerComponentCIPC ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RADocumentViewerComponentCIPC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
