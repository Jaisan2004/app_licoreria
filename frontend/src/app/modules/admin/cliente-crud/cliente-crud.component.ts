import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  clienteForm: FormGroup;
  clientes: any[] = [];
  isEditing = false;
  selectedCliente: any;
  cliente: any;

  // get nombre(){
  //   return this.clienteForm.get('nombre') as FormControl;
  // }

  // get apellido(){
  //   return this.clienteForm.get('apellido') as FormControl;
  // }

  // get email(){
  //   return this.clienteForm.get('email') as FormControl;
  // }

  // get telefono(){
  //   return this.clienteForm.get('telefono') as FormControl;
  // }

  // get password(){
  //   return this.clienteForm.get('password') as FormControl;
  // }
  

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private toastr: ToastrService,
    private _authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', Validators.required],
    telefono: ['', Validators.required],
    password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  editOrCrear(modificar: boolean) {
    if(modificar){
      this.editCliente(this.selectedCliente);
    }else{
      this.crear();
    }
  }
  loadClientes() {
    this.clienteService.getClientes().subscribe((data: any) => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  crear() {
    this.spinner.show();
    //Validacion de datos de usuario
    console.log(this.clienteForm.value);
    if(this.clienteForm.invalid){
      this.spinner.hide();
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    
    const body={
      usuApellido: this.clienteForm.get('apellido')?.value,
      usuContrasena: this.clienteForm.get('password')?.value,
      usuEmail: this.clienteForm.get('email')?.value,
      usuFechaRegistro: new Date(),
      usuNombre: this.clienteForm.get('nombre')?.value,
      usuTelefono: this.clienteForm.get('telefono')?.value,
      usuRol: "USER"
    }

    this._authService.postUsuarios(body).subscribe({
      next: ()=>{
        this.toastr.success('Usuario creado correctamente', 'Exito');
        this.spinner.hide();
        this.loadClientes();      
      },
      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Error al crear el usuario', 'Error');
      }
    })
  }

  getCliente(id: number) {
      this.clienteService.getCliente(id).subscribe((data: any) => {
      this.cliente = data;
      console.log(this.cliente);
      this.isEditing = true;
      this.clienteForm.setValue({apellido: this.cliente.usuApellido, email: this.cliente.usuEmail, nombre: this.cliente.usuNombre, telefono: this.cliente.usuTelefono, password: this.cliente.usuContrasena});
      console.log(this.cliente.usuId);
    });
    
  }
  editCliente(cliente: any) {
    this.spinner.show();
    //Validacion de datos de usuario
    console.log(this.clienteForm.value);
    if(this.clienteForm.invalid){
      this.spinner.hide();
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    
    const body={
      usuId: cliente,
      usuApellido: this.clienteForm.get('apellido')?.value,
      usuContrasena: this.clienteForm.get('password')?.value,
      usuEmail: this.clienteForm.get('email')?.value,
      usuFechaRegistro: new Date(),
      usuNombre: this.clienteForm.get('nombre')?.value,
      usuTelefono: this.clienteForm.get('telefono')?.value,
      usuRol: "USER"
    }

    this._authService.postUsuarios(body).subscribe({
      next: ()=>{
        this.toastr.success('Usuario creado correctamente', 'Exito');
        this.spinner.hide();
        this.loadClientes();      
      },
      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Error al crear el usuario', 'Error');
      }
    })
  }

  deleteCliente(id: number) {
    // this.clienteService.deleteCliente(id).subscribe(() => {
    //   this.loadClientes();
    // });
  }

  resetForm() {
    this.clienteForm.reset();
    this.isEditing = false;
    this.selectedCliente = null;
  }
}
