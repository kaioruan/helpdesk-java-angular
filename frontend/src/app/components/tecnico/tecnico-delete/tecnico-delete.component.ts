import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent {
  tecnico: Tecnico = {
    id:         '',
    nome:       '',
    cpf:        '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

  constructor(
    private service: TecnicoService,
    private router:          Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void { 
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.tecnico.id).subscribe(() => {
      this.router.navigate(['tecnicos'])
      swal("Técnico deletado com sucesso!");
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
