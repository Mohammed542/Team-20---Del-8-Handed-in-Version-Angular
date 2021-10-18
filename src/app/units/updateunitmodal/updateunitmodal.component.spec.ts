import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateunitmodalComponent } from './updateunitmodal.component';

describe('UpdateunitmodalComponent', () => {
  let component: UpdateunitmodalComponent;
  let fixture: ComponentFixture<UpdateunitmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateunitmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateunitmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
