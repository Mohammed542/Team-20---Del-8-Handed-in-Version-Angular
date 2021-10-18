import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserTypeComponent } from './save-user-type.component';

describe('SaveUserTypeComponent', () => {
  let component: SaveUserTypeComponent;
  let fixture: ComponentFixture<SaveUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
