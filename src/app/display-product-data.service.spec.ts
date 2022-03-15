import { TestBed } from '@angular/core/testing';

import { DisplayProductDataService } from './display-product-data.service';

describe('DisplayProductDataService', () => {
  let service: DisplayProductDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayProductDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
