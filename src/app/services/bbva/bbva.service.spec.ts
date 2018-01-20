import { TestBed, inject } from '@angular/core/testing';

import { BbvaService } from './bbva.service';

describe('BbvaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BbvaService]
    });
  });

  it('should be created', inject([BbvaService], (service: BbvaService) => {
    expect(service).toBeTruthy();
  }));
});
