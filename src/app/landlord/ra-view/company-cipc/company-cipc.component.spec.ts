import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCIPCComponent } from './company-cipc.component';

describe('CompanyCIPCComponent', () => {
  let component: CompanyCIPCComponent;
  let fixture: ComponentFixture<CompanyCIPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCIPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCIPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
