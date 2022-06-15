import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoVendedorComponent } from './novo-vendedor/novo-vendedor.component';
import { VendedorComponent } from './vendedor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VendedorRoutingModule } from './vendedor.routing.module';
import { FunilModule } from '../funil/funil.module';



@NgModule({
  declarations: [
    VendedorComponent,
    NovoVendedorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    VendedorRoutingModule,
    FunilModule
  ]
})
export class VendedorModule { }
