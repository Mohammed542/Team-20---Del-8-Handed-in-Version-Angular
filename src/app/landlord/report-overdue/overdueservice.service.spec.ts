import { TestBed } from '@angular/core/testing';

import { OverdueserviceService } from './overdueservice.service';

describe('OverdueserviceService', () => {
  let service: OverdueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverdueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
