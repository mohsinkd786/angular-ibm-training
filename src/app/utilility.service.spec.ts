import { TestBed, inject } from '@angular/core/testing';

import { UtililityService } from './utilility.service';

describe('UtililityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtililityService]
    });
  });

  it('should be created', inject([UtililityService], (service: UtililityService) => {
    expect(service).toBeTruthy();
  }));
});
