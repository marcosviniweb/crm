import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../components/header/header.service';
import { Clientes } from '../interfaces/clientes';
import { Landing } from '../interfaces/landing';
import { AuthService } from '../service/auth.service';
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
       this.dadosCampanha = data[0]
       console.log(this.dadosCampanha)
      });
  }
  submitForm(form:NgForm){
    this.clientes.campos = form.value
    let dados = [{
        id: this.dadosCampanha.id,
        campos:  this.clientes.campos,
        funil: this.clientes.funil,
        link: this.clientes.link,
        nome: this.clientes.nome,
        idlanding: this.clientes.idlanding,
        produto: this.clientes.produto,
    }]

    try{
          this.service.addCliente(this.dadosCampanha.id, dados[0])
          alert("Parabéns - Inscrição feita com sucesso!")
    }catch(error){
      console.log(error)
    }

  }


}
