import { TestBed } from '@angular/core/testing';

import { NgQuickSearchService } from './ng-quick-search.service';

describe('NgQuickSearchService', () => {
  let service: NgQuickSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgQuickSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
