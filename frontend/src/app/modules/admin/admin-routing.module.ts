import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';
import { ClientePedidoComponent } from './cliente-pedido/cliente-pedido.component';
import { ProductosComponent } from '../cliente/productos/productos.component';
import { ProductosCrudComponent } from './productos-crud/productos-crud.component';
import { ProveedoresCrudComponent } from './proveedores-crud/proveedores-crud.component';

const routes: Routes = [

  { path: 'cliente-crud', component:ClienteCrudComponent},
  { path: 'cliente-pedido', component:ClientePedidoComponent},
  { path: 'productos-crud', component:ProductosCrudComponent},
  { path: 'proveedores-crud', component:ProveedoresCrudComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
