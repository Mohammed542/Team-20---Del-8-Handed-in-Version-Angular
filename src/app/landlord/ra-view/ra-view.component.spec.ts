import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaViewComponent } from './ra-view.component';

describe('RaViewComponent', () => {
  let component: RaViewComponent;
  let fixture: ComponentFixture<RaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
