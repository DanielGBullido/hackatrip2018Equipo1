import { TestBed, inject } from '@angular/core/testing';

import { MinubeService } from './minube.service';

describe('MinubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinubeService]
    });
  });

  it('should be created', inject([MinubeService], (service: MinubeService) => {
    expect(service).toBeTruthy();
  }));
});
