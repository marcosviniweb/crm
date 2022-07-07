import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/interfaces/produtos';
import { AuthService } from 'src/app/service/auth.service';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.scss']
})
export class NovoProdutoComponent implements OnInit {
  funels: any;
  arrayProd:any = []

  curso = faGraduationCap
  delete = faTrashAlt
  dolar = faDollarSign


  dadosProd = {
    curso:'',
    valor:0
  }


  public produto: Produtos = {};
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private authService: AuthService,
    private afa: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.service.getFunil().subscribe(res =>{
      this.funels = res
    console.log(res)
   })
  }

  addProd(){

    let dadosProdutos = JSON.stringify(this.dadosProd)

    let dados = JSON.parse(dadosProdutos)

    this.arrayProd.push(dados)
    console.log(this.arrayProd);

    // // TRATANDO O CAMPO "TRATADO"
    // let espaco = dados.campo.replace(/ /g, "");
    // let fonte = espaco.toLowerCase();
    // dados.tratado = fonte
    // console.log(dados)
    // this.arrayCampos.push(dados)



  }

  deleteProd(i:any){
    this.arrayProd.splice(i,1)
  }


  criarProduto(){
    let id = this.fireservice.createId();
    let hora = new Date().toLocaleTimeString()
    let data = new Date().toLocaleDateString()
    let dados = [{
      id: id,
      funil: this.produto.funil,
      categoria:this.produto.categoria,
      arrayProd: this.arrayProd,
      data: data,
      hora: hora

      }]
      try{
          this.service.addProduto(id,dados[0]);
          alert('Produto Criado com sucesso')
          this.router.navigate(['vendedor/details/products']);
      }catch(error){
          console.log(error);
      }
  }



}
