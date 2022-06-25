import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
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
  public resp: Responsavel = {};
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



}
