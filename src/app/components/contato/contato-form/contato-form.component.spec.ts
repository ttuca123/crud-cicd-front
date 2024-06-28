import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoFormComponent } from './contato-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('ContatoFormComponent', () => {
  let component: ContatoFormComponent;
  let fixture: ComponentFixture<ContatoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule, RouterModule
      ],
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
