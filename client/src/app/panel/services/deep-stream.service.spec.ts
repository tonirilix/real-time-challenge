import { TestBed } from '@angular/core/testing';

import { DeepStreamService } from './deep-stream.service';

describe('DeepStreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeepStreamService = TestBed.get(DeepStreamService);
    expect(service).toBeTruthy();
  });
});
