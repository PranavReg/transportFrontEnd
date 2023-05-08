import { TestBed } from '@angular/core/testing';

import { LoginAndregServiceService } from './login-andreg-service.service';

describe('LoginAndregServiceService', () => {
  let service: LoginAndregServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAndregServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
