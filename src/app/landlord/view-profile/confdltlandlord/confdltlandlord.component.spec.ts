import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdltlandlordComponent } from './confdltlandlord.component';

describe('ConfdltlandlordComponent', () => {
  let component: ConfdltlandlordComponent;
  let fixture: ComponentFixture<ConfdltlandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdltlandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfdltlandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
