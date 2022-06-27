import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesDetalhesComponent } from './clientes-detalhes/clientes-detalhes.component';
import { ClientesComponent } from './clientes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from '../../header/header.module';
import { ClienteRoutingModule } from './clientes.routing.module';
import { EmailComponent } from './clientes-detalhes/email/email.component';
import { HistoricoComponent } from './clientes-detalhes/historico/historico.component';
import { WhatsappComponent } from './clientes-detalhes/whatsapp/whatsapp.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetalhesComponent,
    EmailComponent,
    HistoricoComponent,
    WhatsappComponent


  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HeaderModule,
    ClienteRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
