import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [

  { path: '', redirectTo: '/cliente', pathMatch: 'full' }, 

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }, 
  
  { 
    path: 'cliente', 
    loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule)
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  
  { path: '**', redirectTo: '/cliente' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
