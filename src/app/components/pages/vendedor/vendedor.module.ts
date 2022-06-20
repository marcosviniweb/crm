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
import { NovoProdutoComponent } from './detalhes-vendedor/produtos/novo-produto/novo-produto.component';
import { EnviarEmailComponent } from './detalhes-vendedor/email/enviar-email/enviar-email.component';
import { NovaTarefaComponent } from './detalhes-vendedor/tarefas/nova-tarefa/nova-tarefa.component';
import {FormsModule} from "@angular/forms";
import { EditProdutoComponent } from './detalhes-vendedor/produtos/edit-produto/edit-produto.component';



@NgModule({
  declarations: [
    VendedorComponent,
    NovoVendedorComponent,
    EditarVendedorComponent,
    DetalhesVendedorComponent,
    EmailComponent,
    EnviarEmailComponent,
    HistoricoComponent,
    ProdutosComponent,
    NovoProdutoComponent,
    TarefasComponent,
    NovaTarefaComponent,
    EditProdutoComponent,

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    VendedorRoutingModule,
    FunilModule,
    FormsModule
  ]
})
export class VendedorModule { }
