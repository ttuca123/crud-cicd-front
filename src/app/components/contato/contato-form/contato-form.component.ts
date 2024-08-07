import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isCPF } from 'brazilian-values';
import { Contato } from 'src/app/dto/contato';
import { Endereco } from 'src/app/dto/endereco';
import { ContatoService } from 'src/app/services/contato.service';
import { GeoService } from 'src/app/services/geo.service';
import { View } from 'src/app/utils/view';


@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.scss'],
  
})
/**
 * @author Artur Cavalcante
 * @since 16-06-2023
 */
export class ContatoFormComponent extends View implements OnInit {
  contato: Contato;     

  nomeField = new FormControl('', [Validators.required]);
  sobrenomeField = new FormControl('', [Validators.required]);
  cpfField = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private contatoService: ContatoService,    
    private route: ActivatedRoute,
    private router: Router,
    public override loading: MatDialog
  ) {
    super('Cadastro de Contatos', loading);
  }

  ngOnInit() {
    this.contato = this.contatoService.novo();    
    this.route.params.subscribe((parametros: Params) => {
      const codigo = parametros['id'];
      console.log('codigo: ' + codigo);

      if (codigo) {
        this.contatoService.mapParams(parametros);

        this.contatoService.findById(codigo).subscribe(
          (contato) => {
            this.contato = contato.data;

            console.log(this.contato);
          },
          (err) => {
            console.error(err);
          }
        );
      }
    });    
  }
  

  onSubmit() {
    
    if (
      this.contato != undefined &&
      (this.contato.id == undefined)
    ) {
      this.inserir();
    }else{

      this.update();
    }
  }


  /**
   * ```
   * Update de Contato
   * ```
   * @author Artur Cavalcante
   */
  update(){
      this.contato.cpf =  this.formatarCpfSomenteDigitos(this.contato.cpf);    
      this.exibirLoading('Atualizando Contato');
      this.subscription = this.contatoService
      .update(this.contato.id, this.contato)
      .subscribe(_ => {
        this.fecharLoading();
        alert('Atualização realizada com sucesso!');
      }, err=> {
        alert('Ocorreu um erro!');
        console.error(err);        
        this.fecharLoading();
      })



  }

  

  /**
   * ```
   *  Inserir um novo contato
   * ```
   *
   */
  inserir() {
    this.contato.cpf =  this.formatarCpfSomenteDigitos(this.contato.cpf);               
    this.exibirLoading('Salvando Contato');    
    let payload = this.montarPayload(this.contato);    
    console.log(payload);
    this.subscription = this.contatoService
      .save(payload)
      .subscribe((_) => {
        this.exibirSucesso();
        this.limpar();
        this.fecharLoading();
        this.contato = this.contatoService.novo();
        alert('Inclusão realizada com sucesso!');
        
      }, err => {
        alert('Ocorreu um erro!');
        console.error(err);        
        this.fecharLoading();
      }); 
  }

  montarPayload(contato){

    let payload = {
      "cpf": contato.cpf,
      "name": contato.name,
      "last_name": contato.last_name,
      "email": contato.email
    }

    return payload;

  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
