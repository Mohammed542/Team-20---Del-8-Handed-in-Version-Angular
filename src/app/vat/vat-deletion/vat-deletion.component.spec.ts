import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatDeletionComponent } from './vat-deletion.component';

describe('VatDeletionComponent', () => {
  let component: VatDeletionComponent;
  let fixture: ComponentFixture<VatDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatDeletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VatDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
