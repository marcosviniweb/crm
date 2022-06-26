import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesDetalhesComponent } from './clientes-detalhes/clientes-detalhes.component';
import { EmailComponent } from './clientes-detalhes/email/email.component';
import { HistoricoComponent } from './clientes-detalhes/historico/historico.component';
import { WhatsappComponent } from './clientes-detalhes/whatsapp/whatsapp.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [

  {path:'', component:ClientesComponent},
  {path:'details', component:ClientesDetalhesComponent, children:[
    {path:'history', component:HistoricoComponent},
    {path:'email', component:EmailComponent},
    {path:'whatsapp', component:WhatsappComponent},

  ]}
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ClienteRoutingModule { }
