import { TestBed } from '@angular/core/testing';

import { GeoService } from './geo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('GeoService', () => {
  let service: GeoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]

    });
    service = TestBed.inject(GeoService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
