import { TestBed } from '@angular/core/testing';

import { ContatoService } from './contato.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('ContatoService', () => {
  
  let service: ContatoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule
      ]

    });
    service = TestBed.inject(ContatoService);
    http = TestBed.inject(HttpClient);    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });
});
