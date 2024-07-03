import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEnderecoFormComponent } from './contato-endereco-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('ContatoEnderecoFormComponent', () => {
  let component: ContatoEnderecoFormComponent;
  let fixture: ComponentFixture<ContatoEnderecoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule, MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
       provide: MatDialogRef,
       useValue: {}
     }, ],
      declarations: [ContatoEnderecoFormComponent]
    });
    fixture = TestBed.createComponent(ContatoEnderecoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
