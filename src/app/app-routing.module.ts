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
import { ObtenerproductoComponent } from './obtenerproducto/obtenerproducto.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';
import { ListaPComponent } from './lista-p/lista-p.component';
import { DatalleproductoComponent } from './datalleproducto/datalleproducto.component';
import { EditproductComponent } from './components/product/editproduct/editproduct.component';


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
    path: 'obtenerprodcuto',
    component: ObtenerproductoComponent,
  },
  {
    path: 'lista-p',
    component: ListaPComponent,
  },
  {
    path: 'datalleproducto',
    component: DatalleproductoComponent,
  },  
  {
    path: 'editproduct',
    component: EditproductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
