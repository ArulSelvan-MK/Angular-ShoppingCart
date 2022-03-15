import { TestBed } from '@angular/core/testing';

import { ApiRequestRespondService } from './api-request-respond.service';

describe('ApiRequestRespondService', () => {
  let service: ApiRequestRespondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRequestRespondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
