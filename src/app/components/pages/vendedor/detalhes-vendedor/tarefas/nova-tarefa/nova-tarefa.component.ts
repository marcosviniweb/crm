import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { AuthService } from 'src/app/service/auth.service';
import { IdeaService } from 'src/app/service/idea.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.scss']
})
export class NovaTarefaComponent implements OnInit {

  public tarefa: Tarefa = {};
  funels: any;
  clientesFunil:any
  user:any
  nomevendedor: any;
  idstorage = this.afa.auth.currentUser?.uid
  etapaCliente:any
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
     })

     this.service.getUserId(this.idstorage).subscribe((user)=>{
      this.user = user
       this.nomevendedor  = this.user[0].nome;
    });
  }

  getEtapa(id:any){
    this.service.getClienteEtapaHistorico(id).subscribe((res)=>{
      this.etapaCliente = res[0].etapa


    })
  }


  getIdFunil(id:any){
    console.log(id);

    this.service.getClienteIdFunil(id).subscribe(res=>{
      this.clientesFunil = res

    })
  }

  criarTarefa(){
    let id = this.fireservice.createId();
    let dados = [{
          id: id,
          funil: this.tarefa.funil,
          anotacao: this.tarefa.anotacao,
          atividade: this.tarefa.atividade,
          data: this.tarefa.data,
          hora: this.tarefa.hora,
          cliente: this.tarefa.cliente,

    }]

    let idHistorico = this.fireservice.createId();
    let historico = {
      id: idHistorico,
      atividade: this.tarefa.atividade,
      idVendedor: this.idstorage,
      nomevendedor: this.nomevendedor ,
      cliente: this.tarefa.cliente,
      data:this.tarefa.data,
      hora:this.tarefa.hora,
      etapa: this.etapaCliente,
      idFunil:this.tarefa.funil ,
      mensagem:this.tarefa.anotacao
    }
    console.log(historico);


    try{
      this.service.addTarefa(id, dados[0])
      this.service.addHistorico(id, historico)
      console.log(this.tarefa)
      alert('Tarefa Criada com sucesso')
      this.router.navigate(['vendedor/details/tasks']);
    }catch(error){
      console.log(error)
    }

  }
}
