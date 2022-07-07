import { Component, OnInit } from '@angular/core';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneVolume, faCalendarCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {
  userIcon = faUserCircle

  agendamento = faCalendarCheck
  whats = faWhatsapp
  ligar = faPhoneVolume
  email = faEnvelope
  anotar = faFileAlt
  cliente: any;
  dadosCliente:any
  historicoCliente:any
  backPage = '/cliente';
  constructor(
    public service: IdeaService,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {

   let id =  this.activeRoute.snapshot.params['id'];
   console.log(id);
    this.service.getCliente(id).subscribe((res) => {
      this.cliente = res;
      console.log(res);
    })
    
    this.service.getCliente(id).subscribe((res) => {
      this.dadosCliente = res[0].nomecliente;
      this.service.getClienteHistorico(this.dadosCliente).subscribe((res)=>{

        this.historicoCliente = res

      })
    })

  }

}
