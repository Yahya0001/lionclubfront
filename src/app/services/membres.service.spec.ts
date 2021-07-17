import { TestBed } from '@angular/core/testing';

import { profilesService } from './profiles.service';

describe('profilesService', () => {
  let service: profilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(profilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
