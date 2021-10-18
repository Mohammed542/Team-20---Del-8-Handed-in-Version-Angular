import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsdltlandlordComponent } from './sucsdltlandlord.component';

describe('SucsdltlandlordComponent', () => {
  let component: SucsdltlandlordComponent;
  let fixture: ComponentFixture<SucsdltlandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsdltlandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsdltlandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
