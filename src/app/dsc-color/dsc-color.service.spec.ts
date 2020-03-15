import { TestBed } from '@angular/core/testing';

import { DscColorService } from './dsc-color.service';

describe('DscColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DscColorService = TestBed.get(DscColorService);
    expect(service).toBeTruthy();
  });
});
