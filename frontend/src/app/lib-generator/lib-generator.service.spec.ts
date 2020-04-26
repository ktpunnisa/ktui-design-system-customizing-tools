import { TestBed } from '@angular/core/testing';

import { LibGeneratorService } from './lib-generator.service';

describe('LibGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibGeneratorService = TestBed.get(LibGeneratorService);
    expect(service).toBeTruthy();
  });
});
