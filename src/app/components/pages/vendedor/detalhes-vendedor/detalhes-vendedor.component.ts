import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-vendedor',
  templateUrl: './detalhes-vendedor.component.html',
  styleUrls: ['./detalhes-vendedor.component.scss']
})
export class DetalhesVendedorComponent implements OnInit {

  backPage = '/vendedor'

  constructor() { }

  ngOnInit(): void {
  }

  selectButton(id:string){


  }
}
