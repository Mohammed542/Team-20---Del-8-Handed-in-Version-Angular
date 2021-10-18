import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RADocumentViewerComponentCID } from './radocument-viewer.component';

describe('RADocumentViewerComponentCID', () => {
  let component: RADocumentViewerComponentCID;
  let fixture: ComponentFixture<RADocumentViewerComponentCID>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RADocumentViewerComponentCID ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RADocumentViewerComponentCID);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
