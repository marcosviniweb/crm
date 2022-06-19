import { Component, OnInit } from '@angular/core';
import { Funil } from 'src/app/interfaces/funil';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { IdeaService } from 'src/app/service/idea.service';
@Component({
  selector: 'app-novo-funil',
  templateUrl: './novo-funil.component.html',
  styleUrls: ['./novo-funil.component.scss']
})
export class NovoFunilComponent implements OnInit {

  //IMPORTANDO DADOS DA INTERFACE
  public Dadosfunil: Funil = {};
  add = faPlus
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService
  ) { }

  ngOnInit(): void {
  }

  addFunil(){

    let id = this.fireservice.createId();
    let nome = this.Dadosfunil.nome;
    let empresa = this.Dadosfunil.empresa;
    let fase = this.Dadosfunil.fase;

     let dados = [
         {
           id: id,
           nome: nome,
           empresa: empresa,
           fase: fase
         }
     ]
     console.log(dados[0])
     this.service.criarFunil(id, dados[0]);
  }

}
