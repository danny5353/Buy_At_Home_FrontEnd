import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './home/registro/registro.component';
import { ClienteComponent } from './home/cliente/cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
