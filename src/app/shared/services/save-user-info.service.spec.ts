import { TestBed } from '@angular/core/testing';

import { SaveUserInfoService } from './save-user-info.service';

describe('SaveUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveUserInfoService = TestBed.get(SaveUserInfoService);
    expect(service).toBeTruthy();
  });
});
