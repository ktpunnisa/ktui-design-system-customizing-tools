import { TestBed } from '@angular/core/testing';

import { DscInputService } from './dsc-input.service';

describe('DscInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DscInputService = TestBed.get(DscInputService);
    expect(service).toBeTruthy();
  });
});
