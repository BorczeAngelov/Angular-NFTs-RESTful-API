import { TestBed } from '@angular/core/testing';

import { AllNftCollectionsService } from './all-nft-collections.service';

describe('AllNftCollectionsService', () => {
  let service: AllNftCollectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllNftCollectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
