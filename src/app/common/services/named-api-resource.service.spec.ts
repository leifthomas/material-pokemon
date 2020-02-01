import { TestBed } from '@angular/core/testing';

import { NamedApiResourceService } from './named-api-resource.service';

describe('NamedApiResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NamedApiResourceService = TestBed.get(NamedApiResourceService);
    expect(service).toBeTruthy();
  });
});
