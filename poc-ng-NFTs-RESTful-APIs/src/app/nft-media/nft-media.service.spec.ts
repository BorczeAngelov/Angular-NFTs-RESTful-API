import { TestBed } from '@angular/core/testing';

import { NftMediaService } from './nft-media.service';

describe('NftMediaService', () => {
  let service: NftMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
