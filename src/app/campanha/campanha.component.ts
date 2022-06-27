import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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


  public clientes: Clientes  = {};
  public dadosCampanha: any;

  clientesTeste:any

  dadosExibir:Campanhas[]= []


  id: string = '';
  nomefunil: string = '';
  etapafunil: any;
  etapa:any;
  constructor(

    public fireservice: AngularFirestore,
    public service: IdeaService,
    public headerService:HeaderService,
    public activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //esconder o header

    // this.activeRoute.paramMap.subscribe(params => {
    //   let link = params.get('link');
    //   console.log(link);
    // });
    this.id = this.router.url.split('/')[2];
    this.headerService.onOffHeader(false)

      this.service.getCampanhaId(this.id).subscribe(data => {
       this.dadosCampanha = data[0];
       this.dadosExibir = data;
       console.log(this.dadosCampanha)
        this.nomefunil = this.dadosCampanha.funil;

      });


  }

  submitForm(form:NgForm){
    this.clientes.campos = form.value
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
        produto: this.dadosCampanha.produto,
    }]


      let idetapa = this.fireservice.createId()
      console.log(this.nomefunil)

      this.service.getFunilEtapa(this.nomefunil).subscribe(res => {
            this.etapafunil = res[0]

            console.log(this.etapa)

            this.etapa = [{
              id: idetapa,
              campos: this.clientes.campos,
              etapa: this.etapafunil.fase[0],
              atualizacao: new Date().toLocaleDateString(),
              tarefa : 'Contato Adicionado',
              idfunil: this.nomefunil,
              }]
              this.service.addEtapa(idetapa,this.etapa[0])
     })


    try{
           this.service.addCliente(id, dados[0])

          alert("Parabéns - Inscrição feita com sucesso!")
    }catch(error){
      console.log(error)
    }

  }


}
