import { TestBed } from '@angular/core/testing';

import { SemenapiService } from './semenapi.service';

describe('SemenapiService', () => {
  let service: SemenapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemenapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
