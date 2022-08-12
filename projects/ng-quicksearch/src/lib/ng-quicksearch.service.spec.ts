import { TestBed } from '@angular/core/testing';

import { NgQuicksearchService } from './ng-quicksearch.service';

describe('NgQuicksearchService', () => {
  let service: NgQuicksearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgQuicksearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
