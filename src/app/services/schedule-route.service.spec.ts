import { TestBed } from '@angular/core/testing';

import { ShuttleScheduleService } from './schedule-route.service';

describe('ShuttleScheduleService', () => {
  let service: ShuttleScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuttleScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
