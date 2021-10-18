import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIDComponent } from './company-id.component';

describe('CompanyIDComponent', () => {
  let component: CompanyIDComponent;
  let fixture: ComponentFixture<CompanyIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
