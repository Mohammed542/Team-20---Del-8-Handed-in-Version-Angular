import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaintenanceComponent } from './editmaintenance.component';

describe('EditmaintenanceComponent', () => {
  let component: EditmaintenanceComponent;
  let fixture: ComponentFixture<EditmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
