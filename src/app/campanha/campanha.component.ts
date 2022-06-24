import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HeaderService } from '../components/header/header.service';
import { Landing } from '../interfaces/landing';
import { AuthService } from '../service/auth.service';
import { IdeaService } from '../service/idea.service';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss']
})
export class CampanhaComponent implements OnInit {

  public campanha: Landing  = {};
  public dadosCampanha: any;
  constructor(
    
    public fireservice: AngularFirestore,
    public service: IdeaService,
    public headerService:HeaderService

  ) { }

  ngOnInit() {
    //esconder o header
    this.headerService.onOffHeader(false)

      this.service.getCampanha().subscribe(data => {
       this.dadosCampanha = data
       console.log(this.dadosCampanha)
      });
  }

  cadastrar(){
    console.log(this.campanha)
  }

}
