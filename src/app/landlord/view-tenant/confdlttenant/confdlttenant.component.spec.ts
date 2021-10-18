import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdlttenantComponent } from './confdlttenant.component';

describe('ConfdlttenantComponent', () => {
  let component: ConfdlttenantComponent;
  let fixture: ComponentFixture<ConfdlttenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdlttenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfdlttenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
