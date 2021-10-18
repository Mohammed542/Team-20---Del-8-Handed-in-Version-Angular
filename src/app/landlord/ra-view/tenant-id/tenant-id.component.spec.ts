import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantIDComponent } from './tenant-id.component';

describe('TenantIDComponent', () => {
  let component: TenantIDComponent;
  let fixture: ComponentFixture<TenantIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
