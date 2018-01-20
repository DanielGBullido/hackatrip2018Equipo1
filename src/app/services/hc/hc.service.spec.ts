import { TestBed, inject } from '@angular/core/testing';

import { HcService } from './hc.service';

describe('HcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HcService]
    });
  });

  it('should be created', inject([HcService], (service: HcService) => {
    expect(service).toBeTruthy();
  }));
});
