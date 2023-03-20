import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent {
  regex_cpf: "(^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$)"
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
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void { 
    this.Cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.Cliente.id).subscribe(resposta => {
      resposta.perfis = [];
      this.Cliente = resposta;
    })
  }

  update(): void {
    this.service.update(this.Cliente).subscribe(() => {
      this.router.navigate(['clientes'])
      swal("Cliente atualizado com sucesso!");
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          alert(element.message);
        });
      } else {
        alert(ex.error.message);
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
