import { Component, OnInit } from '@angular/core';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  userIcon = faUserCircle
  whats = faWhatsappSquare

  constructor() { }

  ngOnInit(): void {
  }

}
