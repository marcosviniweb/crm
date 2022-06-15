import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FunilModule } from './components/pages/funil/funil.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
 ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FunilModule,
    FontAwesomeModule,
  ],

  exports: [ ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
