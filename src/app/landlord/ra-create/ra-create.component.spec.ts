import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaCreateComponent } from './ra-create.component';

describe('RaCreateComponent', () => {
  let component: RaCreateComponent;
  let fixture: ComponentFixture<RaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
