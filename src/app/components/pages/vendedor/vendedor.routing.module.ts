import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesVendedorComponent } from './detalhes-vendedor/detalhes-vendedor.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';


import { NovoVendedorComponent } from './novo-vendedor/novo-vendedor.component';
import { VendedorComponent } from './vendedor.component';



const routes: Routes = [
  {path:'vendedor', component:VendedorComponent},
  {path:'vendedor/new', component:NovoVendedorComponent},
  {path:'vendedor/edit', component:EditarVendedorComponent},
  {path:'vendedor/details', component:DetalhesVendedorComponent}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class VendedorRoutingModule { }
