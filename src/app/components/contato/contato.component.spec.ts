import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoComponent } from './contato.component';
import { MatCardModule } from '@angular/material/card';
import { ContatoModule } from './contato.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ContatoFilterComponent } from './contato-filter/contato-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContatoComponent', () => {
  let contatoComponent: ContatoComponent;  
  let contatoFilterComponent: ContatoFilterComponent;  
  let contatoListComponent: ContatoListComponent;  
  let fixture: ComponentFixture<ContatoComponent>;
  let fixtureFilter: ComponentFixture<ContatoFilterComponent>;
  let fixtureList: ComponentFixture<ContatoListComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatInputModule, MatCardModule, RouterTestingModule, HttpClientModule, 
        MatDialogModule, FormsModule, MatFormFieldModule, CommonModule],
      declarations: [ContatoComponent, ContatoFilterComponent, ContatoListComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
       provide: MatDialogRef,
       useValue: {}
     }, ],
     schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ContatoComponent);
    fixtureFilter = TestBed.createComponent(ContatoFilterComponent);
    fixtureList = TestBed.createComponent(ContatoListComponent);    

    contatoFilterComponent = fixtureFilter.componentInstance;
    contatoListComponent = fixtureList.componentInstance;
    contatoComponent = fixture.componentInstance;
    

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(contatoComponent).toBeTruthy();
  });
});
