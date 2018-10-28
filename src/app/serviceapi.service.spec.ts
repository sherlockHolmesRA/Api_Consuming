import { TestBed } from '@angular/core/testing';

import { ServiceapiService } from './serviceapi.service';

describe('ServiceapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceapiService = TestBed.get(ServiceapiService);
    expect(service).toBeTruthy();
  });
});
