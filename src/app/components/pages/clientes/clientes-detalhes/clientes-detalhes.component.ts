import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-clientes-detalhes',
  templateUrl: './clientes-detalhes.component.html',
  styleUrls: ['./clientes-detalhes.component.scss']
})
export class ClientesDetalhesComponent implements OnInit {

  backPage = '/cliente';
  cliente: any;
  constructor(
    public service: IdeaService,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let id =  this.activeRoute.snapshot.params['id'];
    console.log(id);
     this.service.getCliente(id).subscribe((res) => {
           this.cliente = res;
           console.log( this.cliente)
     })
   }
  }

