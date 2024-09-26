import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  get nombre(){
    return this.formRegistro.get('nombre') as FormControl;
  }

  get apellido(){
    return this.formRegistro.get('apellido') as FormControl;
  }

  get email(){
    return this.formRegistro.get('email') as FormControl;
  }

  get telefono(){
    return this.formRegistro.get('telefono') as FormControl;
  }

  get password(){
    return this.formRegistro.get('password') as FormControl;
  }
  
  get password2(){
    return this.formRegistro.get('password2') as FormControl;
  }

  formRegistro = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  });

  constructor(private toastr: ToastrService,
    private _authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ){

  }

  registro(){
    this.spinner.show();
    //Validacion de datos de usuario
    if(this.formRegistro.invalid){
      this.spinner.hide();
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    if(this.password.value!==this.password2.value){
      this.spinner.hide();
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return
    }

    const body={
      usuApellido: this.apellido.value,
      usuContrasena: this.password.value,
      usuEmail: this.email.value,
      usuFechaRegistro: new Date(),
      usuNombre: this.nombre.value,
      usuTelefono: this.telefono.value,
      usuRol: "USER"
    }

    this._authService.postUsuarios(body).subscribe({
      next: ()=>{
        this.toastr.success('Usuario creado correctamente', 'Exito');
        this.spinner.hide()
        this.router.navigate(['/Login']);        
      },
      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Error al crear el usuario', 'Error');
      }
    })
  }

}
