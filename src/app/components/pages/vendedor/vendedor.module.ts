import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoVendedorComponent } from './novo-vendedor/novo-vendedor.component';
import { VendedorComponent } from './vendedor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VendedorRoutingModule } from './vendedor.routing.module';
import { FunilModule } from '../funil/funil.module';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';
import { DetalhesVendedorComponent } from './detalhes-vendedor/detalhes-vendedor.component';
import { EmailComponent } from './detalhes-vendedor/email/email.component';
import { HistoricoComponent } from './detalhes-vendedor/historico/historico.component';
import { ProdutosComponent } from './detalhes-vendedor/produtos/produtos.component';
import { TarefasComponent } from './detalhes-vendedor/tarefas/tarefas.component';



@NgModule({
  declarations: [
    VendedorComponent,
    NovoVendedorComponent,
    EditarVendedorComponent,
    DetalhesVendedorComponent,
    EmailComponent,
    HistoricoComponent,
    ProdutosComponent,
    TarefasComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    VendedorRoutingModule,
    FunilModule
  ]
})
export class VendedorModule { }
