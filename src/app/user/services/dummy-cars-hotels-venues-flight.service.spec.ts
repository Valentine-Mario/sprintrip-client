import { TestBed } from '@angular/core/testing';

import { DummyCarsHotelsVenuesFlightService } from './dummy-cars-hotels-venues-flight.service';

describe('DummyCarsHotelsVenuesFlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyCarsHotelsVenuesFlightService = TestBed.get(DummyCarsHotelsVenuesFlightService);
    expect(service).toBeTruthy();
  });
});
