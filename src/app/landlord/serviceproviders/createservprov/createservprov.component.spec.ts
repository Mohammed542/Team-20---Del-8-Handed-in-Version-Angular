import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateservprovComponent } from './createservprov.component';

describe('CreateservprovComponent', () => {
  let component: CreateservprovComponent;
  let fixture: ComponentFixture<CreateservprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateservprovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateservprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
