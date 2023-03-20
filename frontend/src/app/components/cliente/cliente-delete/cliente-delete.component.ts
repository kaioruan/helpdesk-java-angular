import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent {
  Cliente: Cliente = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

  constructor(
    private service: ClienteService,
    private router:          Router,
    private route: ActivatedRoute
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

  delete(): void {
    this.service.delete(this.Cliente.id).subscribe(() => {
      this.router.navigate(['clientes'])
      swal("Cliente deletado com sucesso!");
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

}
