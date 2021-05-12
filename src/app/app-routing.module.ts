import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { LoginclienteComponent } from './logincliente/logincliente.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { HomeencargadoenviosComponent } from './homeencargadoenvios/homeencargadoenvios.component';
import { HomepersonalventasComponent } from './homepersonalventas/homepersonalventas.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { NavbarenviosComponent } from './navbarenvios/navbarenvios.component';
import { NavbarventasComponent } from './navbarventas/navbarventas.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';
import { ProductoscategoriaComponent } from './productoscategoria/productoscategoria.component';
import { MenuopcionesComponent } from './menuopciones/menuopciones.component';
const routes: Routes = [
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'homepersonalventas',
    component: HomepersonalventasComponent,
  },
  {
    path: 'homeencargadoenvios',
    component: HomeencargadoenviosComponent,
  },
  {
    path: 'homeadmin',
    component: HomeadminComponent,
  },
  {
    path: 'navbaradmin',
    component: NavbaradminComponent,
  },
  {
    path: 'navbarenvios',
    component: NavbarenviosComponent,
  },
  {
    path: 'navbarventas',
    component: NavbarventasComponent,
  },
  {
    path: 'logincliente',
    component: LoginclienteComponent,
  },
  {
    path: 'loginadmin',
    component: LoginadminComponent,
  },
  {
    path: 'perfilusuario',
    component: PerfilusuarioComponent,
  },
  {
    path: 'editarcliente',
    component: EditarclienteComponent,
  },
  {
    path: 'productoscategoria',
    component: ProductoscategoriaComponent,
  },
  {
    path: 'menuopciones',
    component: MenuopcionesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
