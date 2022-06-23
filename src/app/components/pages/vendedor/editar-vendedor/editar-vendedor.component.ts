import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.scss']
})
export class EditarVendedorComponent implements OnInit {
  backPage = '/vendedor'
  id: string = "";
  vendedores: any;
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private authService: AuthService,
    private afa: AngularFireAuth,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.service.getvendedorId(this.id ).subscribe(res =>{
      this.vendedores = res;

      console.log(res)
    })
  }

  editar(){
    console.log(this.vendedores)
    try{
      this.service.editarVendedor(this.id, this.vendedores[0])
      alert('Alterador com sucesso')
      this.router.navigate(['vendedor'])
    }catch(error){
      console.log(error)
    }

  }

}
