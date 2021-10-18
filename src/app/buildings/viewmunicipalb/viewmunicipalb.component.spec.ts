import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmunicipalbComponent } from './viewmunicipalb.component';

describe('ViewmunicipalbComponent', () => {
  let component: ViewmunicipalbComponent;
  let fixture: ComponentFixture<ViewmunicipalbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmunicipalbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmunicipalbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
