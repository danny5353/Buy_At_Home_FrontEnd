import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './home/cliente/cliente.component';
import { RegistroComponent } from './home/registro/registro.component';
import {UsuariosComponent} from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  //{ path: 'productos/page/:page', component: ProductosComponent},
  { path: 'usuarios', component: UsuariosComponent},
  {
    path: '**',
    component: HomeComponent,
  } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
