import { TestBed } from '@angular/core/testing';

import { DfirebaseOrdersService } from './dfirebase-orders.service';

describe('DfirebaseOrdersService', () => {
  let service: DfirebaseOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DfirebaseOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
