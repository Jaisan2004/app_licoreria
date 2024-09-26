import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ClientePedidoComponent } from './cliente-pedido/cliente-pedido.component';


@NgModule({
  declarations: [
    AdminComponent,
    ClientePedidoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
