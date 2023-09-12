import { TestBed } from '@angular/core/testing';

import { FsDataService } from './fs-data.service';

describe('FsDataService', () => {
  let service: FsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
