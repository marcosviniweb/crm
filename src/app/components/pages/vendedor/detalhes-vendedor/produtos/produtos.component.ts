import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faGraduationCap, faPlus } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { IdeaService } from 'src/app/service/idea.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  curso = faGraduationCap
  add = faPlus
  delete = faTrashAlt
  edit = faEdit
  products:any[] = []
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private authService: AuthService,
    private afa: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.service.getProdutos().subscribe((res) => {
            this.products = res;
    });

  }

}
