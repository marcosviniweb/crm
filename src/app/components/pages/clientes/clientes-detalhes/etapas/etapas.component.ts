import { faEnvelope, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.scss']
})
export class EtapasComponent implements OnInit {
  userIcon = faUserCircle

  email = faEnvelope
  add = faPlus
  cliente: any;
  idetapa: string = '';
  funil: string = '';
  etapaselected: string = '';
  etapas: any;
  status: string = '' ;
  constructor(
    public service: IdeaService,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let id =  this.activeRoute.snapshot.params['id'];
    console.log(id);
     this.service.getClienteEtapa(id).subscribe((res) => {
          this.cliente = res;
          this.funil = this.cliente[0].idfunil;
          this.idetapa = this.cliente[0].id;
          this.service.getFunilEtapa(this.funil ).subscribe((res) => {
          this.etapas = res[0].fase;

          });
     })



   }

   faseEscolhida(etapa: string){
        console.log(etapa)
        let dados = {
           etapa: etapa,

        }
        this.service.editarEtapa(this.idetapa, dados)
   }

   statuscliente(etapa: string){
    console.log(etapa)
    let dados = {

       status:etapa
    }
    this.service.editarEtapa(this.idetapa, dados)
}
}
