import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { CampanhaComponent } from './campanha/campanha.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent , canActivate: [AuthGuard]},

  {path: 'landingPage',
  loadChildren:()=>import('./components/pages/landing-page/landing-page.module').then(m=>m.LandingPageModule)},

  {path: 'funil',
  loadChildren:()=>import('./components/pages/funil/funil.module').then(m=>m.FunilModule)},

  {path: 'vendedor',
  loadChildren:()=>import('./components/pages/vendedor/vendedor.module').then(m=>m.VendedorModule)},

  {path:'register', component:RegisterComponent, canActivate: [LoginGuard]},
  {path:'campanha', component: CampanhaComponent},
  {path:'campanha/:id', component: CampanhaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
