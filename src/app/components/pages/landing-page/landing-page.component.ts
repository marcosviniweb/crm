import { HeaderService } from './../../header/header.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEye, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Landing } from 'src/app/interfaces/landing';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public landing:Landing = {}
  public dados : any;
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    public headerService:HeaderService
    ) { }

  userIcon = faUserCircle
  delete = faTrashAlt
  edit = faEdit
  view = faEye

  ngOnInit() {
    this.headerService.onOffHeader(true)
    this.service.getCampanha().subscribe(data => {
        this.dados = data
        console.log(this.dados)
    })
  }
  excluir(id: string){
      console.log(id)
      this.service.exluirLanding(id)
    }
}
