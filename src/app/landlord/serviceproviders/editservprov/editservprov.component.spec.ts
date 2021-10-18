import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservprovComponent } from './editservprov.component';

describe('EditservprovComponent', () => {
  let component: EditservprovComponent;
  let fixture: ComponentFixture<EditservprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditservprovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
