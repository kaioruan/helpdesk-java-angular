import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  Cliente: Cliente = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  cpf: FormControl =       new FormControl(null, Validators.required);
  email: FormControl =        new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: ClienteService,
    private router:          Router,
    ) { }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.Cliente).subscribe(() => {
      this.router.navigate(['clientes'])
      swal("Cliente criado com sucesso!");
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          console.log(element.message);
        });
      } else {
        console.log(ex.error.message);
      }
    })
  }

  addPerfil(perfil: any): void {
    if(this.Cliente.perfis.includes(perfil)) {
      this.Cliente.perfis.splice(this.Cliente.perfis.indexOf(perfil), 1);
    } else {
      this.Cliente.perfis.push(perfil);
    }
    
  }
  
  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
     && this.email.valid && this.senha.valid
  }
}
