import { IdeaService } from 'src/app/service/idea.service';
import { Component, OnInit } from '@angular/core';

import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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

  historico:any
  constructor( public service: IdeaService) { }

  ngOnInit(): void {
    this.service.getHistorico().subscribe((res)=>{
      this.historico = res
      console.log(this.historico);

    })
  }

}
