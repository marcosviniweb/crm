import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/interfaces/produtos';
import { AuthService } from 'src/app/service/auth.service';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.scss']
})
export class EditProdutoComponent implements OnInit {
  products:any[] = []
  funels:any[] = []
  public produto: Produtos = {};
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private authService: AuthService,
    private afa: AngularFireAuth,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.getProdutos().subscribe((res) => {
      this.products = res;
    });
    this.service.getFunil().subscribe((res) => {
      this.funels = res;
    });


  }
  editarProduto(){
    let id = this.activeRoute.snapshot.params['id'];
    try{
          this.service.editarProdutos(id, this.products[0]);
          alert('Editado com sucesso');
          this.router.navigate(['vendedor/details/products']);
      }catch(error){
        console.log(error);
  }
}
}
