import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { FormsModule } from '@angular/forms'; // Para ngModel

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de importar HttpClientModule aquí
    FormsModule,
    AdminModule,
    ClienteModule, // Asegúrate de tener FormsModule si usas [(ngModel)]
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
