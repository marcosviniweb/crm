import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/header/header.service';
import { Vendedor } from 'src/app/interfaces/vendedor';
import { AuthService } from 'src/app/service/auth.service';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-novo-vendedor',
  templateUrl: './novo-vendedor.component.html',
  styleUrls: ['./novo-vendedor.component.scss']
})
export class NovoVendedorComponent implements OnInit {

  public vendedor: Vendedor = {};
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private afa: AngularFireAuth,
    public headerService:HeaderService

  ) { }

  backPage = '/vendedor'

  ngOnInit(): void {


  }




  async add(){
        // console.log(this.vendedor)


      try{
        const user = await this.afa.auth.createUserWithEmailAndPassword(this.vendedor.email, this.vendedor.senha);
        let id = user.user?.uid;
        let dados = [
          {
            id: id,
            // cpf: this.vendedor.cpf,
            email: this.vendedor.email,
            empresa: this.vendedor.empresa,
            // endereco: this.vendedor.endereco,
            tipo: 'Vendedor',
            nome: this.vendedor.nome,
            telefone: this.vendedor.telefone,
          }
        ]
        this.service.cadastrarVendedor(id, dados[0]);
        alert('Cadastrado com sucesso');
        this.router.navigate(['vendedor'])
      }catch(error){
          console.log(error)
      }

  }

}
