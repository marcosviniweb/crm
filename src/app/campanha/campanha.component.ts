import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../components/header/header.service';
import { Campanhas } from '../interfaces/campanhas';
import { Clientes } from '../interfaces/clientes';
import { IdeaService } from '../service/idea.service';


@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss']
})
export class CampanhaComponent implements OnInit {


  concluido = false

  public clientes: Clientes  = {};
  public dadosCampanha: any;

  clientesTeste:any
  background = '';
  logo = '';
  dadosExibir:Campanhas[]= []


  id: string = '';
  nomefunil: string = '';
  etapafunil: any;
  etapa:any;
  cursos:any
  curso:any
  index:any
  constructor(

    public fireservice: AngularFirestore,
    public service: IdeaService,
    public headerService:HeaderService,
    public activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    //let storageRef = this.storage.storage.ref('imagens/to/1657209139863marvel.png');
    // var pathReference = this.storage.ref('imagens/1657209139863marvel.png');

    // console.log(pathReference)
    //esconder o header
    this.headerService.onOffHeader(false)
    // this.activeRoute.paramMap.subscribe(params => {
    //   let link = params.get('link');
    //   console.log(link);
    // });
    this.id = this.router.url.split('/')[2];
    console.log(this.id)

    this.service.getCampanhaId(this.id).subscribe(data => {

      this.dadosCampanha = data[0];
      console.log(this.dadosCampanha.campos);


      this.dadosExibir = data;

      this.nomefunil = this.dadosCampanha.funil;

      this.service.getprodutovalor(this.dadosCampanha.produto).subscribe(res =>{
        this.cursos = res[0].arrayProd

      this.background = this.dadosCampanha.imagePath
      this.logo = this.dadosCampanha.logoPath
     })

    });





  }

  getBackground(){
            let url = 'url(' + this.background  + ')'
            console.log(url);
          return url
  }

  cursoselect(id:any){
    console.log(id)
  }

  conclusao(){

    if(this.concluido == false){
      this.concluido = true
    }
    else{
      this.concluido = false
    }

    console.log(this.concluido);

  }

  async submitForm(form:NgForm){
    this.clientes.campos = form.value

    console.log(this.cursos[this.index].valor);




    let id = this.fireservice.createId()
    let dados = [{
        id: id,
        idfunil: this.dadosCampanha.funil,
        nomecliente: form.value.nome,
        telefonecliente: form.value.telefone,
        campos:  this.clientes.campos,
        link: this.dadosCampanha.link,
        nome: this.dadosCampanha.nome,
        idlanding: this.dadosCampanha.id,
        produto: this.cursos[this.index].curso,
        valorproduto: this.cursos[this.index].valor
    }]
    console.log(dados);


     await this.service.getFunilEtapa(this.nomefunil).subscribe(res => {
            this.etapafunil = res[0]
            // console.log(  this.etapafunil)

            let idetapa = this.fireservice.createId()
            let idrelatorio = this.fireservice.createId()

            let dados = [{
              id: idetapa,
              nomecliente: form.value.nome,
              idcliente: id,
              telefonecliente: form.value.telefone,
              campos: this.clientes.campos,
              etapa: this.etapafunil.fase[0],
              atualizacao: new Date().toLocaleDateString(),
              tarefa : 'Contato Adicionado',
              idfunil: this.nomefunil,
              }]

              let dadosrelatorio = [{
                id: idrelatorio,
                idcliente: id,
                nomecliente: form.value.nome,
                etapa: this.etapafunil.fase[0],
                atualizacao: new Date().toLocaleDateString(),
                tarefa : 'Contato Adicionado',
                idfunil: this.nomefunil,
                produto: this.cursos[this.index].curso,
                valorproduto:  this.cursos[this.index].valor
                }]

               this.service.addEtapa(idetapa,dados[0])
               this.service.addRelatorioValores(idrelatorio, dadosrelatorio[0])
                console.log(dados)
                if(this.concluido == false){
                  this.concluido = true
                }
                else{
                  this.concluido = false
                }

                console.log(this.concluido);
     })


    try{
            this.service.addCliente(id, dados[0])


    }catch(error){
      console.log(error)
    }

  }



}
