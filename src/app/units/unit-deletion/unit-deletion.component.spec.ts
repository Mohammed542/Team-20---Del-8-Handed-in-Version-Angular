import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDeletionComponent } from './unit-deletion.component';

describe('UnitDeletionComponent', () => {
  let component: UnitDeletionComponent;
  let fixture: ComponentFixture<UnitDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitDeletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
