import { TestBed } from '@angular/core/testing';

import { LibraryGeneratorService } from './library-generator.service';

describe('LibraryGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryGeneratorService = TestBed.get(LibraryGeneratorService);
    expect(service).toBeTruthy();
  });
});
