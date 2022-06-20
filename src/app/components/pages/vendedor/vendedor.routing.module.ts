import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesVendedorComponent } from './detalhes-vendedor/detalhes-vendedor.component';
import { EmailComponent } from './detalhes-vendedor/email/email.component';
import { EnviarEmailComponent } from './detalhes-vendedor/email/enviar-email/enviar-email.component';
import { HistoricoComponent } from './detalhes-vendedor/historico/historico.component';
import { NovoProdutoComponent } from './detalhes-vendedor/produtos/novo-produto/novo-produto.component';
import { ProdutosComponent } from './detalhes-vendedor/produtos/produtos.component';
import { NovaTarefaComponent } from './detalhes-vendedor/tarefas/nova-tarefa/nova-tarefa.component';
import { TarefasComponent } from './detalhes-vendedor/tarefas/tarefas.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';


import { NovoVendedorComponent } from './novo-vendedor/novo-vendedor.component';
import { VendedorComponent } from './vendedor.component';



const routes: Routes = [
  {path:'vendedor', component:VendedorComponent},
  {path:'vendedor/new', component:NovoVendedorComponent},
  {path:'vendedor/edit', component:EditarVendedorComponent},
  {path:'vendedor/details', component:DetalhesVendedorComponent,
  children:[
    {path:'historic', component:HistoricoComponent },
    {path:'email', component:EmailComponent },
    {path:'tasks', component:TarefasComponent },
    {path:'products', component:ProdutosComponent },
    {path:'send', component:EnviarEmailComponent },
    {path:'newTask',component:NovaTarefaComponent},
    {path:'newProducts', component:NovoProdutoComponent}


  ]}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class VendedorRoutingModule { }
