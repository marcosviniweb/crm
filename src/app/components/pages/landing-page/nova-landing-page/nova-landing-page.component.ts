import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Landing } from './../../../../interfaces/landing';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-nova-landing-page',
  templateUrl: './nova-landing-page.component.html',
  styleUrls: ['./nova-landing-page.component.scss']
})
export class NovaLandingPageComponent implements OnInit {

  public landing:Landing = {}

  funis:any = []
  add = faPlus

  campos = {
    campo:'',
    tipo:''
  }

  arrayCampos:Object[] = []

  constructor( public service: IdeaService,  public fireservice: AngularFirestore, public router:Router ) { }

  ngOnInit(){
    this.service.getFunil().subscribe((res)=> {
      this.funis = res
      console.log(this.funis)
    })
  }

  addCampos(){

    let dadosCampos = JSON.stringify(this.campos)

    let dados = JSON.parse(dadosCampos)

    this.arrayCampos.push(dados)

    this.landing.campos = this.arrayCampos


  }

  addLanding(){
    console.log(this.landing);
    let id = this.fireservice.createId()

    try{
      this.service.addLanding(id,this.landing)
      alert('Landing Page cadastrada com sucesso !')
      this.router.navigate(['/landingPage'])
    }catch(error){console.log(error)}

  }


}
