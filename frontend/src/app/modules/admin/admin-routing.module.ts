import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';

const routes: Routes = [

  { path: '', redirectTo: '/cliente', pathMatch: 'full' },  // redirecciona a Login por defecto
  {path: 'cliente', component: ClienteCrudComponent},            // componente de login
  { path: '**', redirectTo: '/cliente' }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
