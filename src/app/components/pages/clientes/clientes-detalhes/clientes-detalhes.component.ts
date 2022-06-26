import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-detalhes',
  templateUrl: './clientes-detalhes.component.html',
  styleUrls: ['./clientes-detalhes.component.scss']
})
export class ClientesDetalhesComponent implements OnInit {

  backPage = '/cliente';

  constructor() { }

  ngOnInit(): void {
  }

}
