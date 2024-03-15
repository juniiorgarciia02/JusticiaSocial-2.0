import { TestBed } from '@angular/core/testing';

import { ServicesSqlService } from './services-sql.service';

describe('ServicesSqlService', () => {
  let service: ServicesSqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesSqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
