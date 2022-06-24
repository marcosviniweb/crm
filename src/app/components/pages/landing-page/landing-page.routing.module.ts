import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarLandingPageComponent } from './editar-landing-page/editar-landing-page.component';
import { LandingPageComponent } from './landing-page.component';
import { NovaLandingPageComponent } from './nova-landing-page/nova-landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'new',component:NovaLandingPageComponent},
  {path:'edit',component:EditarLandingPageComponent},
  {path:'edit/:id',component:EditarLandingPageComponent}

];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
