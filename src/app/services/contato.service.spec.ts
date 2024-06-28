import { TestBed } from '@angular/core/testing';

import { ContatoService } from './contato.service';
import { HttpClient } from '@angular/common/http';

describe('ContatoService', () => {
  
  let service: ContatoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoService);
    http = TestBed.inject(HttpClient);    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });
});
