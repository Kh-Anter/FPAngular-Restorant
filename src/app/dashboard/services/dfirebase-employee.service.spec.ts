import { TestBed } from '@angular/core/testing';

import { DfirebaseEmployeeService } from './dfirebase-employee.service';

describe('DfirebaseEmployeeService', () => {
  let service: DfirebaseEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DfirebaseEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
