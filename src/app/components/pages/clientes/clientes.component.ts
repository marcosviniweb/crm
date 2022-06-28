import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Funil } from 'src/app/interfaces/funil';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {


  userIcon = faUserCircle
  whats = faWhatsappSquare

  clientes:any;
  funilselect: string = '';
  funis: any;
  respselect: string = '';
  etapaselect: string = '';
  resparray: any;
  etapasarray: any;
  etapas: any;
  etapafunil: any;
  public funil: Funil = {};

  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router
  ) { }

  ngOnInit() {


          this.service.getEtapa().subscribe((res) => {
            this.clientes = res
           });

           this.service.getFunil().subscribe((res) => {
            this.funis = res
             });



  }

  async responsavel() {
    console.log(this.funilselect)
   await this.service.getFunilId(this.funilselect).subscribe((res) => {
        console.log(res)
      this.resparray = res[0].vendedor
      this.etapas = res[0].fase
    });

    await this.service.getClienteFunil(this.funilselect).subscribe((res) => {
      this.clientes = res
      console.log(this.clientes)
   });


  }

  etapa(id: any) {
    console.log(this.respselect)
    this.service.getFunilId(this.funilselect).subscribe((res) => {
      this.etapasarray = res[0].fase
      this.etapas = res[0].fase
    });



  }

  filtrofinal(id: any){
    this.service.getFunilEtapaInteressado(this.funilselect,id ).subscribe((res) => {
      this.clientes = res
      console.log( this.clientes)
   });
  }


}
