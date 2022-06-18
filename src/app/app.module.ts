import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FunilModule } from './components/pages/funil/funil.module';
import { VendedorModule } from './components/pages/vendedor/vendedor.module';
import { LandingPageModule } from './components/pages/landing-page/landing-page.module';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
 ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FunilModule,
    VendedorModule,
    LandingPageModule,
    FontAwesomeModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule

  ],

  exports: [ ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
