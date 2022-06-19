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


   funil : any;
   tamanhoArray:any;
   fases:any = []
   arrayFase:any = []
   FaseEdit: string = "";
   index: any;
   item: any;
   id: string = "";
  //private funilSubscriptions : Subscription;

  add = faPlus
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
       this.id = this.activeRoute.snapshot.params['id'];
       this.service.getFunilId(this.id ).subscribe(res =>{
        this.funil = res;
        for(let item of this.funil){
          this.arrayFase = item.fase
        }
        console.log(res)
      })
   }

   editarFase(item: any){
        this.item = item;
        let index = this.arrayFase.indexOf(item)
        this.index = this.arrayFase.indexOf(item)
        console.log(this.index )
        this.FaseEdit =  this.arrayFase[index]
   }

   alterar(event: any){
      console.log(event)
      this.arrayFase[this.index] =  event
      console.log(this.FaseEdit)
   }
  ngOnInit(): void {
  }

  editar(){
        console.log( this.funil[0])

      this.service.editarFunil(this.id, this.funil[0] )

  }

}
