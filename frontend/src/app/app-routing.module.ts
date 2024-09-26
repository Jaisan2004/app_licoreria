import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { authGuard } from './utils/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },  // redirecciona a Login por defecto
  { path: 'Login', component: LoginComponent },            // componente de login
  { path: 'Register', component: RegisterComponent },      // componente de registro
  { path: 'Home', component: HomeComponent, canActivate: [authGuard] },              // componente de inicio
  { path: '**', redirectTo: '/Login' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
