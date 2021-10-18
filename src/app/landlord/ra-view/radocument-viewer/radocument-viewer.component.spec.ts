import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RADocumentViewerComponent } from './radocument-viewer.component';

describe('RADocumentViewerComponent', () => {
  let component: RADocumentViewerComponent;
  let fixture: ComponentFixture<RADocumentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RADocumentViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RADocumentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
