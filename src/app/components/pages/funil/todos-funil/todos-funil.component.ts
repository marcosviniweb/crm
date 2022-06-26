import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Funil } from 'src/app/interfaces/funil';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos-funil',
  templateUrl: './todos-funil.component.html',
  styleUrls: ['./todos-funil.component.scss']
})
export class TodosFunilComponent implements OnInit {

  backPage = '/funil'

  funnel = faFilter
  delete = faTrashAlt
  edit = faEdit
  public funnels = new Array<Funil>();
  private funilSubscriptions : Subscription;

  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router
  ) {
      this.funilSubscriptions = this.service.getFunil().subscribe(res =>{
        this.funnels = res;
        console.log(this.funnels)
      })

   }

  ngOnInit(): void {
  }

    deletar(id: any){
        this.service.exluirFunil(id);
    }



}
