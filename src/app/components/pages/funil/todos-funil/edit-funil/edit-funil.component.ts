import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Funil } from 'src/app/interfaces/funil';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-edit-funil',
  templateUrl: './edit-funil.component.html',
  styleUrls: ['./edit-funil.component.scss']
})
export class EditFunilComponent implements OnInit {


  public funil = new Array<Funil>();
  private funilSubscriptions : Subscription;

  add = faPlus
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
       let id = this.activeRoute.snapshot.params['id'];
       this.funilSubscriptions = this.service.getFunilId(id).subscribe(res =>{
        this.funil = res;
        console.log(this.funil)
      })
   }

  ngOnInit(): void {
  }


}
