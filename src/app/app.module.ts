import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CampanhaComponent } from './campanha/campanha.component';
import { HeaderModule } from './components/header/header.module';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { PhonePipe } from './shared/phone-pipe/phone.pipe';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CampanhaComponent,
    PhonePipe,
 ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule,
    HeaderModule,

    // ToastrModule.forRoot(),

  ],

  exports: [
    PhonePipe
  ],


  providers: [
    AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
