import { faFileAlt, faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Landing } from './../../../../interfaces/landing';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-nova-landing-page',
  templateUrl: './nova-landing-page.component.html',
  styleUrls: ['./nova-landing-page.component.scss']
})
export class NovaLandingPageComponent implements OnInit {

  public landing:Landing = {}

  backPage = '/landingPage'

  funis:any = []
  produtos: any = []
  add = faPlus
  campo = faFileAlt
  delete = faTrashAlt
  edit = faEdit
  valorproduto: any;
  valoritem: string = "";
  campos = {
    campo:'',
    tipo:'',
    tratado:''
  }

  produto = {
      nome: '',
      valor: ''
  }

  arrayCampos:any = []

  constructor(
    public service: IdeaService,  public fireservice: AngularFirestore, public router:Router ) { }

  ngOnInit(){
    this.service.getFunil().subscribe((res)=> {
      this.funis = res
      console.log(this.funis)
    })

    this.service.getProdutos().subscribe((res)=> {
      this.produtos = res
      console.log(this.funis)
    })
  }

  addCampos(){

    let dadosCampos = JSON.stringify(this.campos)

    let dados = JSON.parse(dadosCampos)

    // TRATANDO O CAMPO "TRATADO"
    let espaco = dados.campo.replace(/ /g, "");
    let fonte = espaco.toLowerCase();
    dados.tratado = fonte
    console.log(dados)
    this.arrayCampos.push(dados)


    this.landing.campos = this.arrayCampos


  }

  deleteCampo(item: any){
    console.log(item)
    let index = this.arrayCampos.indexOf(item)
    if(index > -1){
       this.arrayCampos.splice(index,1)
    }

  }

  // PEGAR O VALOR DO PRODUTO

  valor(id: string){
    console.log(id)
        this.service.getprodutovalor(id).subscribe(res =>{
           this.valorproduto = res
           console.log(this.valorproduto[0].valor)
        })
  }

  addLanding(){
    let id = this.fireservice.createId()

    console.log(this.funis.id);
    let dados = [{
          id: id,
          nome: this.landing.nome,
          butao: this.landing.butao,
          campos: this.landing.campos,
          funil: this.landing.funil,
          link: this.landing.link,
          produto: this.landing.produto,
          valorproduto: this.valorproduto[0].valor,
          titulo: this.landing.titulo
    }]
      console.log(dados)

    try{
      this.service.addLanding(id,dados[0])
      alert('Landing Page cadastrada com sucesso !')
      this.router.navigate(['/landingPage'])
    }catch(error){console.log(error)}

  }


}
