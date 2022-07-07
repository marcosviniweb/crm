import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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
  products:any
  funels:any[] = []

  curso = faGraduationCap
  delete = faTrashAlt
  dolar = faDollarSign
  edit = faEdit;

  cursosEdit={
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
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params['id'];
    this.service.getProdutoId(id).subscribe((res) => {
      this.products = res[0];
      console.log(res);

    });
    this.service.getFunil().subscribe((res) => {
      this.funels = res;
    });


  }
    editarCampos(item: any){

    this.cursosEdit = this.products.arrayProd[item]
    }

    excluirCampos(i:any){
      this.products.arrayProd.splice(i,1)
    }

  editarProduto(){
    let id = this.activeRoute.snapshot.params['id'];
    console.log(this.products);

    try{
          this.service.editarProdutos(id, this.products);
          alert('Editado com sucesso');
          this.router.navigate(['vendedor/details/products']);
      }catch(error){
        console.log(error);
  }
}
}
