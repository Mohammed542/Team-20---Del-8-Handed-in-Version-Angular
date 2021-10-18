import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDeletionComponent } from './building-deletion.component';

describe('BuildingDeletionComponent', () => {
  let component: BuildingDeletionComponent;
  let fixture: ComponentFixture<BuildingDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingDeletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
