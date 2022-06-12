import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoFunilComponent } from './novo-funil/novo-funil.component';
import { TodosComponent } from './todos/todos.component';
import { FunilComponent } from './funil.component';


const routes: Routes = [
  {path:'funil', component:FunilComponent},
  {path:'funil/all', component:TodosComponent},
  {path:'funil/add', component:NovoFunilComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunilRoutingModule { }
