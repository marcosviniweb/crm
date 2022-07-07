import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faEdit, faFileAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Landing } from 'src/app/interfaces/landing';

@Component({
  selector: 'app-editar-landing-page',
  templateUrl: './editar-landing-page.component.html',
  styleUrls: ['./editar-landing-page.component.scss']
})
export class EditarLandingPageComponent implements OnInit {


  public landing:Landing = {}

  backPage = '/landingPage';

  Datalanding:any = [];

  produtos: any = [];

  add = faPlus;
  campo = faFileAlt;
  delete = faTrashAlt;
  edit = faEdit;
  funis: any = [];
  id: string = '';


  camposEdit = {
    campo:'',
    tipo:''
  };

  campos = {
    campo:'',
    tipo:'',
    tratado:''
  }
  arrayCampos:any = [];

  constructor(
    public service: IdeaService,
    public fireservice: AngularFirestore,
    public router:Router,
    private activeRoute: ActivatedRoute
    ) { }


  ngOnInit(){

    this.id =  this.activeRoute.snapshot.params['id'];

    this.service.getLandingId(this.id).subscribe((res)=> {
      this.Datalanding = res[0]
      console.log(this.Datalanding)
    })

    this.service.getProdutos().subscribe((res)=> {
      this.produtos = res
        console.log(this.produtos)
    })

    this.service.getFunil().subscribe((res)=> {
      this.funis = res
        console.log(this.produtos)
    })
  }



   editarCampos(item: any){

    this.camposEdit = this.Datalanding.campos[item]
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


  alterar(){
    console.log(this.Datalanding);


    try{
      this.service.editarlanding(this.id,this.Datalanding)
      alert('Landing Page altualizada com sucesso !')
      this.router.navigate(['/landingPage'])
    }catch(error){
      console.log(error)
    }

 }


}
