import { TestBed } from '@angular/core/testing';

import { DscLinkService } from './dsc-link.service';

describe('DscLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DscLinkService = TestBed.get(DscLinkService);
    expect(service).toBeTruthy();
  });
});
