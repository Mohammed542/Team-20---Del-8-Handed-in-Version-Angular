import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpopComponent } from './editpop.component';

describe('EditpopComponent', () => {
  let component: EditpopComponent;
  let fixture: ComponentFixture<EditpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
