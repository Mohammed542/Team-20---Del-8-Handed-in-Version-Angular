import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepopComponent } from './deletepop.component';

describe('DeletepopComponent', () => {
  let component: DeletepopComponent;
  let fixture: ComponentFixture<DeletepopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
