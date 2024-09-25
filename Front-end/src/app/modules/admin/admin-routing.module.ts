import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './productos-crud/listar-productos/listar-productos.component';
import { AgregarEditarProductoComponent } from './productos-crud/agregar-editar-producto/agregar-editar-producto.component';
import { ListarProveedoresComponent } from './proveedores-crud/listar-proveedores/listar-proveedores.component';
import { AgregarEditarProveedorComponent } from './proveedores-crud/agregar-editar-proveedor/agregar-editar-proveedor.component';
import { ListarPqrsComponent } from './pqrs-crud/listar-pqrs/listar-pqrs.component';

const routes: Routes = [

{
  path: '',
    children: [
      //Productos
      { path: 'productosAdmin', component: ListarProductosComponent },
      { path: 'productosAdmin/agregar', component: AgregarEditarProductoComponent },
      { path: 'productosAdmin/editar/:id', component: AgregarEditarProductoComponent },

      //Proveedores
      { path: 'proveedores', component: ListarProveedoresComponent },
      { path: 'proveedores/agregar', component: AgregarEditarProveedorComponent },
      { path: 'proveedores/editar/:id', component: AgregarEditarProveedorComponent },

      //PQRS
      { path: 'pqrs', component: ListarPqrsComponent },
      { path: 'pqrs/agregar', component: AgregarEditarProductoComponent },
      { path: 'pqrs/editar/:id', component: AgregarEditarProductoComponent },

      //Clientes
      { path: 'clientes', component: ListarProductosComponent },
      { path: 'clientes/agregar', component: AgregarEditarProductoComponent },
      { path: 'clientes/editar/:id', component: AgregarEditarProductoComponent },

      { path: '**', redirectTo: '/productosAdmin' } 

    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
