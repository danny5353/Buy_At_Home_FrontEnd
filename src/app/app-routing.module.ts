import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { LoginclienteComponent } from './logincliente/logincliente.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
const routes: Routes = [
  {
    path: 'modal',
    component: ModalComponent,
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
    path: 'logincliente',
    component: LoginclienteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
