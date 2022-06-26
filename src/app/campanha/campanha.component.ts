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
       console.log(this.dadosExibir[0])

      });


  }

  submitForm(form:NgForm){
    this.clientes.campos = form.value
    console.log( this.clientes.campos)
    let dados = [{
        id: this.dadosCampanha.id,
        campos:  this.clientes.campos,
        funil: this.dadosCampanha.funil,
        link: this.dadosCampanha.link,
        nome: this.dadosCampanha.nome,
        idlanding: this.dadosCampanha.idlanding,
        produto: this.dadosCampanha.produto,
    }]
      console.log(dados)
    // try{
    //       this.service.addCliente(this.dadosCampanha.id, dados[0])
    //       alert("Parabéns - Inscrição feita com sucesso!")
    // }catch(error){
    //   console.log(error)
    // }

  }


}
