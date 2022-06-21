import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  criarProduto(){
    let id = this.fireservice.createId();
    let dados = [{
      id: id,
      funil: this.produto.funil,
      nome: this.produto.nome,
      valor: this.produto.valor,

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
