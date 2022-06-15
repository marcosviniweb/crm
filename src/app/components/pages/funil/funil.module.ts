import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TodosFunilComponent } from './todos-funil/todos-funil.component';
import { FunilComponent } from './funil.component';
import { NovoFunilComponent } from './novo-funil/novo-funil.component';
import { EditFunilComponent } from './todos-funil/edit-funil/edit-funil.component';
import { AddVendedorComponent } from './todos-funil/add-vendedor/add-vendedor.component';
import { FuniRoutingModule } from './funil.routing.module';
import { HeaderComponent } from '../../header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FunilComponent,
    NovoFunilComponent,
    TodosFunilComponent,
    EditFunilComponent,
    AddVendedorComponent,

  ],

  imports: [
    CommonModule,
    FontAwesomeModule,
    FuniRoutingModule
  ],

  exports: [
    HeaderComponent
  ],
})
export class FunilModule { }
