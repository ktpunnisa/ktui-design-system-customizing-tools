import { TestBed } from '@angular/core/testing';

import { DscButtonService } from './dsc-button.service';

describe('DscButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DscButtonService = TestBed.get(DscButtonService);
    expect(service).toBeTruthy();
  });
});
