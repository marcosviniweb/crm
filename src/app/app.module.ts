import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { FunilComponent } from './components/pages/funil/funil.component';
import { VendedorComponent } from './components/pages/vendedor/vendedor.component';
import { TodosComponent } from './components/pages/funil/todos/todos.component';
import { NovoFunilComponent } from './components/pages/funil/novo-funil/novo-funil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FunilComponent,
    VendedorComponent,
    TodosComponent,
    NovoFunilComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
