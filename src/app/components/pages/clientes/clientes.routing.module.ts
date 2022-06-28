import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesDetalhesComponent } from './clientes-detalhes/clientes-detalhes.component';
import { EmailComponent } from './clientes-detalhes/email/email.component';
import { EtapasComponent } from './clientes-detalhes/etapas/etapas.component';
import { HistoricoComponent } from './clientes-detalhes/historico/historico.component';
import { WhatsappComponent } from './clientes-detalhes/whatsapp/whatsapp.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [

  {path:'', component:ClientesComponent},
  {path:'details', component:ClientesDetalhesComponent,
   children:[
    {path:'history', component:HistoricoComponent},
    {path:'history/:id', component:HistoricoComponent},
    {path:'email', component:EmailComponent},
    {path:'email/:id', component:EmailComponent},
    {path:'phase', component:EtapasComponent},
    {path:'phase/:id', component:EtapasComponent},
    {path:'whatsapp', component:WhatsappComponent},
    {path:'whatsapp/:id', component:WhatsappComponent},

  ]},
  {path:'details/:id', component:ClientesDetalhesComponent}

]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ClienteRoutingModule { }
