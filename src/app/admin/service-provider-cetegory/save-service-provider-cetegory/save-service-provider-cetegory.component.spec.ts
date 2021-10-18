import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveServiceProviderCetegoryComponent } from './save-service-provider-cetegory.component';

describe('SaveServiceProviderCetegoryComponent', () => {
  let component: SaveServiceProviderCetegoryComponent;
  let fixture: ComponentFixture<SaveServiceProviderCetegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveServiceProviderCetegoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveServiceProviderCetegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
