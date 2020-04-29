import { TestBed } from '@angular/core/testing';

import { DscProjectService } from './dsc-project.service';

describe('DscProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DscProjectService = TestBed.get(DscProjectService);
    expect(service).toBeTruthy();
  });
});
