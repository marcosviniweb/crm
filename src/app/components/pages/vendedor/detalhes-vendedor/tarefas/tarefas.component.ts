import { Component, OnInit } from '@angular/core';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarCheck, faPhoneVolume, faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  agendamento = faCalendarCheck
  whats = faWhatsapp
  ligar = faPhoneVolume
  email = faEnvelope
  anotar = faFileAlt
  add = faPlus

  constructor() { }

  ngOnInit(): void {
  }

}
