import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [

  {path: '', redirectTo: '/Login', pathMatch: 'full'},

  //Login
  {path: 'Login', component:LoginComponent},

  //Register
  {path: 'Register', component:RegisterComponent},

  //Home
  {path: 'Home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
