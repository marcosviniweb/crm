import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    try{
      this.service.addTarefa(id, dados[0])
      console.log(this.tarefa)
      alert('Tarefa Criada com sucesso')
      this.router.navigate(['vendedor/details/tasks']);
    }catch(error){
      console.log(error)
    }

  }
}
