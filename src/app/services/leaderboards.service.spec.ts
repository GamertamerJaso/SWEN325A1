import { TestBed } from '@angular/core/testing';

import { LeaderboardsService } from './leaderboards.service';

describe('LeaderboardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderboardsService = TestBed.get(LeaderboardsService);
    expect(service).toBeTruthy();
  });
});
