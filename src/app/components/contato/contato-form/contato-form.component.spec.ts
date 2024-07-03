import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoFormComponent } from './contato-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ContatoFormComponent', () => {
  let component: ContatoFormComponent;
  let fixture: ComponentFixture<ContatoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule, RouterModule, RouterTestingModule,
        MatDialogModule, FormsModule
      ],
       providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
       provide: MatDialogRef,
       useValue: {}
     }, ],     
     
      declarations: [ContatoFormComponent]
    });
    fixture = TestBed.createComponent(ContatoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
