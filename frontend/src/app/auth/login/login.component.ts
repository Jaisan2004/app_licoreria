import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  get email(){
    return this.formLogin.get('email') as FormControl;
  }

  get password(){
    return this.formLogin.get('password') as FormControl;
  }

  formLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  });

  constructor(private toastr: ToastrService,
    private _authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  login(){
    this.spinner.show();
    //Validacion de datos de usuario
    if(!this.email.value|| !this.password.value){
      this.spinner.hide();
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    const body={
      email: this.email.value,
      password: this.password.value
    }

    this._authService.login(body).subscribe({
      next: (data: any)=>{
        localStorage.setItem('token', data.token);
        this.spinner.hide()
        this.router.navigate(['/Home']);        
      },
      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Credenciales incorrectas', 'Error de inicio de sesión');
      }
    })
  }

}
