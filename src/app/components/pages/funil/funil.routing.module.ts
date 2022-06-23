import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FunilComponent } from './funil.component';
import { NovoFunilComponent } from './novo-funil/novo-funil.component';
import { AddVendedorComponent } from './todos-funil/add-vendedor/add-vendedor.component';
import { EditFunilComponent } from './todos-funil/edit-funil/edit-funil.component';
import { TodosFunilComponent } from './todos-funil/todos-funil.component';


const routes: Routes = [

  {path:'', component:FunilComponent},
  {path:'new', component: NovoFunilComponent},
  {path:'all', component: TodosFunilComponent},
  {path:'all/add', component:AddVendedorComponent },
  {path:'all/add/:id', component:AddVendedorComponent },
  {path:'all/edit', component: EditFunilComponent},
  {path:'all/edit/:id', component: EditFunilComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FuniRoutingModule { }
