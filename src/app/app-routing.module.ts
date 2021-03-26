import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { LoginclienteComponent } from './logincliente/logincliente.component';
const routes: Routes = [
  {
    path: 'modal',
    component: ModalComponent,
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
