import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEye, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Landing } from 'src/app/interfaces/landing';
import { AuthService } from 'src/app/service/auth.service';
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
    private router: Router,
    private authService: AuthService,
    private afa: AngularFireAuth,
    ) { }

  userIcon = faUserCircle
  delete = faTrashAlt
  edit = faEdit
  view = faEye

  ngOnInit() {

    this.service.getCampanha().subscribe(data => {
        this.dados = data
        console.log(this.dados)
    })
  }

}
