import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoFilterComponent } from './contato-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContatoListComponent } from '../contato-list/contato-list.component';
import { MatInputModule } from '@angular/material/input';

describe('ContatoFilterComponent', () => {
  let component: ContatoFilterComponent;
  let fixture: ComponentFixture<ContatoFilterComponent>;

  let componentContatoList: ContatoListComponent;
  let fixtureContatoList: ComponentFixture<ContatoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule, RouterModule, MatCardModule,
        RouterTestingModule, MatDialogModule, FormsModule,
        MatFormFieldModule, MatInputModule        
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
       provide: MatDialogRef,
       useValue: {}
     }, ],
      declarations: [ContatoFilterComponent, ContatoListComponent]
    });
    fixture = TestBed.createComponent(ContatoFilterComponent);
    component = fixture.componentInstance;

    fixtureContatoList = TestBed.createComponent(ContatoListComponent);
    componentContatoList = fixtureContatoList.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
