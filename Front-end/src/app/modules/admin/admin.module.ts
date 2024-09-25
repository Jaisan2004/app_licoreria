import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductosCrudComponent } from './productos-crud/productos-crud.component';
import { ClientesCrudComponent } from './clientes-crud/clientes-crud.component';
import { ProveedoresCrudComponent } from './proveedores-crud/proveedores-crud.component';
import { PqrsCrudComponent } from './pqrs-crud/pqrs-crud.component';
import { ListarProductosComponent } from './productos-crud/listar-productos/listar-productos.component';
import { AgregarEditarProductoComponent } from './productos-crud/agregar-editar-producto/agregar-editar-producto.component';
import { AgregarEditarClienteComponent } from './clientes-crud/agregar-editar-cliente/agregar-editar-cliente.component';
import { ListarClientesComponent } from './clientes-crud/listar-clientes/listar-clientes.component';
import { ListarProveedoresComponent } from './proveedores-crud/listar-proveedores/listar-proveedores.component';
import { AgregarEditarProveedorComponent } from './proveedores-crud/agregar-editar-proveedor/agregar-editar-proveedor.component';
import { AgregarEditarPqrsComponent } from './pqrs-crud/agregar-editar-pqrs/agregar-editar-pqrs.component';
import { ListarPqrsComponent } from './pqrs-crud/listar-pqrs/listar-pqrs.component';


@NgModule({
  declarations: [
    ProductosCrudComponent,
    ClientesCrudComponent,
    ProveedoresCrudComponent,
    PqrsCrudComponent,
    ListarProductosComponent,
    AgregarEditarProductoComponent,
    AgregarEditarClienteComponent,
    ListarClientesComponent,
    ListarProveedoresComponent,
    AgregarEditarProveedorComponent,
    AgregarEditarPqrsComponent,
    ListarPqrsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
