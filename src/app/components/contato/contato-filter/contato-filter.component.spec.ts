import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoFilterComponent } from './contato-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('ContatoFilterComponent', () => {
  let component: ContatoFilterComponent;
  let fixture: ComponentFixture<ContatoFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule, RouterModule
      ],
      declarations: [ContatoFilterComponent]
    });
    fixture = TestBed.createComponent(ContatoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
