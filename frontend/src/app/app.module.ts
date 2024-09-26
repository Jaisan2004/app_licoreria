import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { ClienteCrudComponent } from './modules/admin/cliente-crud/cliente-crud.component';
import { ProductosCrudComponent } from './modules/admin/productos-crud/productos-crud.component';
import { ProveedoresCrudComponent } from './modules/admin/proveedores-crud/proveedores-crud.component';
import { CarritoComponent } from './modules/cliente/carrito/carrito.component';
import { PedidoComponent } from './modules/cliente/pedido/pedido.component';
import { ProductosComponent } from './modules/cliente/productos/productos.component';
import { ClienteComponent } from './modules/cliente/cliente/cliente.component';
import {MatTableModule} from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClienteComponent,
    ClienteCrudComponent,
    ProductosCrudComponent,
    ProveedoresCrudComponent,
    CarritoComponent,
    PedidoComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgxSpinnerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
