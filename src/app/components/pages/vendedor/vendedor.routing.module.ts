import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NovoVendedorComponent } from './novo-vendedor/novo-vendedor.component';
import { VendedorComponent } from './vendedor.component';



const routes: Routes = [
  {path:'vendedor', component:VendedorComponent},
  {path:'vendedor/new', component:NovoVendedorComponent}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class VendedorRoutingModule { }
