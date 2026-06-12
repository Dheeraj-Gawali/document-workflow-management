import { TestBed } from '@angular/core/testing';

import { ApprovalMatrixService } from './approval-matrix';

describe('ApprovalMatrixService', () => {
  let service: ApprovalMatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovalMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
