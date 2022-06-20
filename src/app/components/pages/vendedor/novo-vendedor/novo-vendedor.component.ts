import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
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
    private authService: AuthService,
    private afa: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  async add(){
        // console.log(this.vendedor)
      let id = this.fireservice.createId();
      try{
        await this.afa.createUserWithEmailAndPassword(this.vendedor.email, this.vendedor.senha);
        this.service.cadastrarVendedor(id, this.vendedor);
      }catch(error){
          console.log(error)
      }

  }

}
