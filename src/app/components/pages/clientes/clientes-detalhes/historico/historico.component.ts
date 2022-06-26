import { Component, OnInit } from '@angular/core';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneVolume, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  agendamento = faCalendarCheck
  whats = faWhatsapp
  ligar = faPhoneVolume
  email = faEnvelope
  anotar = faFileAlt
  constructor() { }

  ngOnInit(): void {
  }

}
