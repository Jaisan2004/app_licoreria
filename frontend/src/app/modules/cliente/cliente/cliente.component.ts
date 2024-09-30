import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clienteForm: FormGroup;
  clienteId: number = 1; // ID del cliente, puede ser dinámico según la lógica de autenticación

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    // Inicializar el formulario con validaciones
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Cargar los datos del cliente al inicializar el componente
    this.loadCliente();
  }

  // Cargar la información del cliente desde el servicio
  loadCliente(): void {
    this.clienteService.getClienteById(this.clienteId).subscribe((cliente) => {
      this.clienteForm.patchValue(cliente); // Rellenar el formulario con los datos del cliente
    }, error => {
      console.error('Error al cargar los datos del cliente', error);
    });
  }

  // Guardar o actualizar la información del cliente
  onSubmit(): void {
    if (this.clienteForm.valid) {
      this.clienteService.updateCliente(this.clienteId, this.clienteForm.value).subscribe(() => {
        alert('Información del cliente guardada');
      }, error => {
        console.error('Error al guardar la información del cliente', error);
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
