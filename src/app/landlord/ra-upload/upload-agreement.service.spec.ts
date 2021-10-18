import { TestBed } from '@angular/core/testing';

import { UploadAgreementService } from './upload-agreement.service';

describe('UploadAgreementService', () => {
  let service: UploadAgreementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadAgreementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
