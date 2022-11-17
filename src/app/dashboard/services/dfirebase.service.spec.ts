import { TestBed } from '@angular/core/testing';

import { DFirebaseService } from './dfirebase.service';

describe('DFirebaseService', () => {
  let service: DFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
