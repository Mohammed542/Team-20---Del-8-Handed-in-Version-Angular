import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RADocumentViewerComponentTID } from './radocument-viewer.component';

describe('RADocumentViewerComponentTID', () => {
  let component: RADocumentViewerComponentTID;
  let fixture: ComponentFixture<RADocumentViewerComponentTID>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RADocumentViewerComponentTID ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RADocumentViewerComponentTID);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
