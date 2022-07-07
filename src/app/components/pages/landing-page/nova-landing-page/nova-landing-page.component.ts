import {
  faFileAlt,
  faTrashAlt,
  faEdit,
} from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Landing } from './../../../../interfaces/landing';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IdeaService } from 'src/app/service/idea.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-nova-landing-page',
  templateUrl: './nova-landing-page.component.html',
  styleUrls: ['./nova-landing-page.component.scss'],
})
export class NovaLandingPageComponent implements OnInit {
  public landing: Landing = {};

  backPage = '/landingPage';

  funis: any = [];
  produtos: any = [];
  add = faPlus;
  campo = faFileAlt;
  delete = faTrashAlt;
  edit = faEdit;
  valorproduto: any;
  valoritem: string = '';
  path!: File;
  fileToUpload: File | null = null;

  campos = {
    campo: '',
    tipo: '',
    tratado: '',
  };

  produto = {
    nome: '',
    valor: '',
  };

  arrayCampos: any = [];
  imageSrc: any;
  refFile: any;

  constructor(
    public service: IdeaService,
    public fireservice: AngularFirestore,
    public router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.service.getFunil().subscribe((res) => {
      this.funis = res;
      console.log(this.funis);
    });

    this.service.getProdutos().subscribe((res) => {
      this.produtos = res;
      console.log(this.funis);
    });
  }

  getImageBackground(files: any) {
    this.fileToUpload = files;
    console.log(this.fileToUpload);
    this.path = files.target.files[0];
    const date = new Date().getTime();
    this.refFile = `imagens/${date}${this.path.name}`;
    const reader = new FileReader();
    reader.onload = (e) => (this.imageSrc = reader.result);

    reader.readAsDataURL(this.path);


  }

  addCampos() {
    let dadosCampos = JSON.stringify(this.campos);

    let dados = JSON.parse(dadosCampos);

    // TRATANDO O CAMPO "TRATADO"
    let espaco = dados.campo.replace(/ /g, '');
    let fonte = espaco.toLowerCase();
    dados.tratado = fonte;
    console.log(dados);
    this.arrayCampos.push(dados);

    this.landing.campos = this.arrayCampos;
  }

  deleteCampo(item: any) {
    console.log(item);
    let index = this.arrayCampos.indexOf(item);
    if (index > -1) {
      this.arrayCampos.splice(index, 1);
    }
  }

  // PEGAR O VALOR DO PRODUTO

  valor(id: string) {
    console.log(id);
    this.service.getprodutovalor(id).subscribe((res) => {
      this.valorproduto = res;
      //  console.log(this.valorproduto.categoria)
    });
  }

  async addLanding() {
    let id = this.fireservice.createId();
    let imagePath = '';
    if(!this.landing.campos){
        this.landing.campos = ['Sem dados']
   }

    await this.storage.upload(this.refFile, this.path).then((res)=>{
      imagePath = `https://firebasestorage.googleapis.com/v0/b/${res.ref.bucket}/o/imagens%2F${res.ref.name}?alt=media`;

    })
    console.log(this.funis.id);
    let dados = [
      {
        id: id,
        nome: this.landing.nome,
        butao: this.landing.butao,
        campos: this.landing.campos,
        funil: this.landing.funil,
        link: this.landing.link,
        produto: this.landing.produto,
        titulo: this.landing.titulo,
        imagePath: imagePath
      },
    ];
    console.log(dados);

    try {
      this.service.addLanding(id, dados[0]);
      alert('Landing Page cadastrada com sucesso !');
      this.router.navigate(['/landingPage']);
    } catch (error) {
      console.log(error);
    }


  }
}
