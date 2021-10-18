import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullygenstatemntComponent } from './succesfullygenstatemnt.component';

describe('SuccesfullygenstatemntComponent', () => {
  let component: SuccesfullygenstatemntComponent;
  let fixture: ComponentFixture<SuccesfullygenstatemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfullygenstatemntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfullygenstatemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
