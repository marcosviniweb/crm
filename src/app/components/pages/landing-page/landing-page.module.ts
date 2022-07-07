import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LandingPageComponent } from './landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NovaLandingPageComponent } from './nova-landing-page/nova-landing-page.component';
import { EditarLandingPageComponent } from './editar-landing-page/editar-landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing.module';
import { FunilModule } from '../funil/funil.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../header/header.module';
import { AngularFireStorageModule } from '@angular/fire/storage';




@NgModule({
  declarations: [
    LandingPageComponent,
    NovaLandingPageComponent,
    EditarLandingPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    LandingPageRoutingModule,
    FormsModule,
    HeaderModule,
    AngularFireStorageModule
  ]
})
export class LandingPageModule { }
