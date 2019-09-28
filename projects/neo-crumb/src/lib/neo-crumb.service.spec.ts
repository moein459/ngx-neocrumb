import { TestBed } from '@angular/core/testing';

import { NeoCrumbService } from './neo-crumb.service';

describe('NeoCrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
	const service: NeoCrumbService = TestBed.get(NeoCrumbService);
	expect(service).toBeTruthy();
  });
});
