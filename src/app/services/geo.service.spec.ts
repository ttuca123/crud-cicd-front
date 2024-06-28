import { TestBed } from '@angular/core/testing';

import { GeoService } from './geo.service';
import { HttpClient } from '@angular/common/http';

describe('GeoService', () => {
  let service: GeoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
