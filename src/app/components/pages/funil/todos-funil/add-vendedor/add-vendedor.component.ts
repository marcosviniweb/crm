import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Responsavel } from 'src/app/interfaces/responsavel';
import { Funil } from 'src/app/interfaces/funil';

@Component({
  selector: 'app-add-vendedor',
  templateUrl: './add-vendedor.component.html',
  styleUrls: ['./add-vendedor.component.scss']
})
export class AddVendedorComponent implements OnInit {

  backPage = '/funil/all'

  add = faPlus
  id: string = '';
  public funil: Funil = {};
  arrayFase: any;
  vendedores : any;
  public resp: Responsavel = {};


  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private activeRoute: ActivatedRoute

  ) {

   }

  ngOnInit(){
    this.id = this.activeRoute.snapshot.params['id'];
    this.service.getFunilId(this.id ).subscribe(res =>{
     this.funil = res[0];
         console.log(res)
   })
   this.service.getVendedor().subscribe(res =>{
    this.vendedores = res;
    console.log(this.vendedores);
   });


  }

  edit(){
    console.log(this.funil)

    try{
          this.service.editarFunil(this.id, this.funil);
          alert('Vendedor(es) adicionado com sucesso');
          this.router.navigate(['funil/all'])
    }catch(error){
      console.log(error)
    }
  }


}
