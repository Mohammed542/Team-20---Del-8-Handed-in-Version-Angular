import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsdlttenantComponent } from './sucsdlttenant.component';

describe('SucsdlttenantComponent', () => {
  let component: SucsdlttenantComponent;
  let fixture: ComponentFixture<SucsdlttenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsdlttenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsdlttenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
