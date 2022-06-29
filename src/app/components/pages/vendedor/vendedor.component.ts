import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEye, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
import { IdeaService } from 'src/app/service/idea.service';
import { HeaderService } from '../../header/header.service';
@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {

  backPage = '/home';

  userIcon = faUserCircle;
  delete = faTrashAlt;
  edit = faEdit;
  view = faEye;
  vendedores: any;;
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    public headerService:HeaderService
  ) { }

  ngOnInit() {



    this.service.getVendedor().subscribe(res =>{
      this.vendedores = res;
      console.log(this.vendedores)
    })

  }

}
