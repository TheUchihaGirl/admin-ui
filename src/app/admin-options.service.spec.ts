import { TestBed } from '@angular/core/testing';

import { AdminOptionsService } from './admin-options.service';

describe('AdminOptionsService', () => {
  let service: AdminOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
