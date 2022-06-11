import { Component, OnInit } from '@angular/core';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //icons
  landing = faFileAlt
  funnel = faFilter
  seller = faHeadset

  //Resumo
  contatos = 15
  vendas = 30
  tarefas = 23
  ganho = 600

  atividades:any[] = [
    {name:'Mario Becker', action:'Fez uma anotação na etapa prospecção', date:'em 18/06/2021 ás 16:00'},
    {name:'Camila Santos', action:'Fez uma ligação', date:'em 18/06/2021 ás 13:00'},
    {name:'Marlene Silva', action:'enviou um email', date:'em 15/06/2021 ás 16:00'},
    {name:'Joyce Carvalho', action:'Enviou uma mensagem via Whatsapp', date:'em 14/06/2021 ás 14:00'}
  ]


  //Funil de vendas
  taxaCoversao = '20%';
  perdas = 90
  valorPerdido = 684

  constructor() { }

  ngOnInit(): void {
  }

  timeSelect(a:string){

  let borderSelect = function(yes:string,no1:string,no2:string){
    document.getElementById(yes)!.style.borderBottom = '5px solid #5855d6'
    document.getElementById(no1)!.style.borderBottom = 'none'
    document.getElementById(no2)!.style.borderBottom = 'none'
  }

  if(a == 'day'){
  this.contatos = 15
  this.vendas = 30
  this.tarefas = 23
  this.ganho = 600
  this.taxaCoversao = '13%';
  this.perdas = 90
  this.valorPerdido = 684

  borderSelect(a,'week','mouth')

  }

  if(a == 'week'){
  this.contatos = 103
  this.vendas = 89
  this.tarefas = 205
  this.ganho = 432
  this.taxaCoversao = '54%';
  this.perdas = 198
  this.valorPerdido = 1230

  borderSelect(a,'day','mouth')
  }

  if(a == 'mouth'){
  this.contatos = 783
  this.vendas = 186
  this.tarefas = 982
  this.ganho = 1180
  this.taxaCoversao = '65%';
  this.perdas = 350
  this.valorPerdido = 3625

  borderSelect(a,'day','week')

  }

  }
}
