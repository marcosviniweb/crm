import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faEdit, faFileAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Landing } from 'src/app/interfaces/landing';

@Component({
  selector: 'app-editar-landing-page',
  templateUrl: './editar-landing-page.component.html',
  styleUrls: ['./editar-landing-page.component.scss']
})
export class EditarLandingPageComponent implements OnInit {


  public landing:Landing = {}

  backPage = '/landingPage'
  Datalanding:any = []

  produtos: any = []

  add = faPlus
  campo = faFileAlt
  delete = faTrashAlt
  edit = faEdit
  funis: any = []

  campos = {
    campo:'',
    tipo:''
  }

  arrayCampos:any = []

  constructor(
    public service: IdeaService,
    public fireservice: AngularFirestore,
    public router:Router,
    private activeRoute: ActivatedRoute
    ) { }


  ngOnInit(){
    let id =  this.activeRoute.snapshot.params['id'];
    console.log(id);
    this.service.getLandingId(id).subscribe((res)=> {
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

  addCampos(){

    let dadosCampos = JSON.stringify(this.campos)

    let dados = JSON.parse(dadosCampos)

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

  alterar(){
    console.log(this.Datalanding);
  //   let id = this.fireservice.createId()

  //   try{
  //     this.service.addLanding(id,this.landing)
  //     alert('Landing Page cadastrada com sucesso !')
  //     this.router.navigate(['/landingPage'])
  //   }catch(error){console.log(error)}

 }


}
