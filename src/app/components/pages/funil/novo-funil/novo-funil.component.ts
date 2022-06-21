import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Funil } from 'src/app/interfaces/funil';
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { IdeaService } from 'src/app/service/idea.service';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-novo-funil',
  templateUrl: './novo-funil.component.html',
  styleUrls: ['./novo-funil.component.scss']
})
export class NovoFunilComponent implements OnInit {


  arrayFase:any = []

  //IMPORTANDO DADOS DA INTERFACE
  public Dadosfunil: Funil = {};
  add = faPlus
  delete = faTrashAlt
  funnel = faFilter
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }


  criarFase(){

          this.arrayFase.push(this.Dadosfunil.fase)
          console.log(this.arrayFase)
  }
  deleteFase(item: any){
    console.log(item)
    let index = this.arrayFase.indexOf(item)
    if(index > -1){
       this.arrayFase.splice(index,1)
    }

  console.log(this.arrayFase)

  }
  addFunil(){

    let id = this.fireservice.createId();
    let nome = this.Dadosfunil.nome;
    let empresa = this.Dadosfunil.empresa;
    let fase = this.arrayFase;

     let dados = [
         {
           id: id,
           nome: nome,
           empresa: empresa,
           fase: fase
         }
     ]
     try{
      console.log(dados[0])
      this.service.criarFunil(id, dados[0]);
      this.router.navigate(['/home'])
     }catch(error){
      console.log(error);
     }


  }




}
