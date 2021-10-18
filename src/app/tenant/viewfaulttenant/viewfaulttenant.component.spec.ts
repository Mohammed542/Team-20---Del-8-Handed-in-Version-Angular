import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfaulttenantComponent } from './viewfaulttenant.component';

describe('ViewfaulttenantComponent', () => {
  let component: ViewfaulttenantComponent;
  let fixture: ComponentFixture<ViewfaulttenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfaulttenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfaulttenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
