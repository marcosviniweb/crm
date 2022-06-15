import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FunilComponent } from './funil.component';
import { NovoFunilComponent } from './novo-funil/novo-funil.component';
import { AddVendedorComponent } from './todos-funil/add-vendedor/add-vendedor.component';
import { EditFunilComponent } from './todos-funil/edit-funil/edit-funil.component';
import { TodosFunilComponent } from './todos-funil/todos-funil.component';


const routes: Routes = [

  {path:'funil', component:FunilComponent},
  {path:'funil/new', component: NovoFunilComponent},
  {path:'funil/all', component: TodosFunilComponent},
  {path:'funil/all/add', component:AddVendedorComponent },
  {path:'funil/all/edit', component: EditFunilComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FuniRoutingModule { }
