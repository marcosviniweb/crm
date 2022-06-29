import { Component, OnInit } from '@angular/core';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarCheck, faPhoneVolume, faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { IdeaService } from 'src/app/service/idea.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  agendamento = faCalendarCheck
  whats = faWhatsapp
  ligar = faPhoneVolume
  email = faEnvelope
  anotar = faFileAlt
  add = faPlus
  icon:any;
  tarefas: any[] = []
  constructor(
    public fireservice: AngularFirestore,
    public service: IdeaService,
    private router: Router,
    private authService: AuthService,
    private afa: AngularFireAuth,
  ) { }

  ngOnInit() {

    this.service.getTarefa().subscribe(res =>{
      this.tarefas = res
      for(let icon of res){
          console.log(icon.atividade)
          switch(icon.atividade){
              case 'Agendamento de Reunião':
               this.icon = this.agendamento
              break;
              case 'Mensagem Whatsapp':
                this.icon = this.whats
               break;
               case 'Ligação':
                this.icon = this.ligar
               break;

               case 'Anotação':
                this.icon = this.anotar
               break;


          }
      }
    });
  }

}
