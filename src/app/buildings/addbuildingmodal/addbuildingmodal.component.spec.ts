import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbuildingmodalComponent } from './addbuildingmodal.component';

describe('AddbuildingmodalComponent', () => {
  let component: AddbuildingmodalComponent;
  let fixture: ComponentFixture<AddbuildingmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbuildingmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbuildingmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
