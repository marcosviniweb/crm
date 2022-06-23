import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-add-vendedor',
  templateUrl: './add-vendedor.component.html',
  styleUrls: ['./add-vendedor.component.scss']
})
export class AddVendedorComponent implements OnInit {

  backPage = '/funil/all'

  add = faPlus
  id: string = '';
  funil: any;
  arrayFase: any;
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private activeRoute: ActivatedRoute

  ) {
    this.id = this.activeRoute.snapshot.params['id'];
    this.service.getFunilId(this.id ).subscribe(res =>{
     this.funil = res;
         console.log(res)
   })
   }

  ngOnInit(): void {
  }


}
