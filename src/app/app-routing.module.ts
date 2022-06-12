import { VendedorComponent } from './components/pages/vendedor/vendedor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FunilComponent } from './components/pages/funil/funil.component';
const routes: Routes = [

  // {path:'', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path:'funil', component:FunilComponent},
  {path:'vendedor', component:VendedorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
