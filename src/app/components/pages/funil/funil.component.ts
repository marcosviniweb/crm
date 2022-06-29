import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Funil } from 'src/app/interfaces/funil';
import { Responsavel } from 'src/app/interfaces/responsavel';
import { IdeaService } from 'src/app/service/idea.service';
@Component({
  selector: 'app-funil',
  templateUrl: './funil.component.html',
  styleUrls: ['./funil.component.scss']
})
export class FunilComponent implements OnInit {

  userIcon = faUserCircle
  funis:any;
  funilselect: string = '';
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
      this.service.getFunil().subscribe((res) => {
            this.funis = res
      });



  }

  responsavel(id: any) {
    console.log(this.funilselect)
    this.service.getFunilId(this.funilselect).subscribe((res) => {
      this.resparray = res[0].vendedor
      this.etapas = res[0].fase
    });

    this.service.getClienteFunil(this.funilselect).subscribe((res) => {
      this.etapafunil = res
      console.log(this.etapafunil)
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
      this.etapafunil = res
      console.log(this.etapafunil)
   });
  }


}
