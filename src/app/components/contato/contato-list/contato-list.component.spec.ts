import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoListComponent } from './contato-list.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

describe('ContatoListComponent', () => {
  let component: ContatoListComponent;
  let fixture: ComponentFixture<ContatoListComponent>;
  

  beforeEach(() => {    
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule, MatCardModule, MatTableModule
        ],
        providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
       provide: MatDialogRef,
       useValue: {}
     }, ],
      declarations: [ContatoListComponent]
    });
    fixture = TestBed.createComponent(ContatoListComponent);  
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
