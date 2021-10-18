import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewunitinfoComponent } from './viewunitinfo.component';

describe('ViewunitinfoComponent', () => {
  let component: ViewunitinfoComponent;
  let fixture: ComponentFixture<ViewunitinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewunitinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewunitinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
