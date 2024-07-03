import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/modules/material.module';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [        
        MatDialogModule,
        MaterialModule        
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
       provide: MatDialogRef,
       useValue: {}
     }, ],
      declarations: [LoadingComponent]
    });
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
