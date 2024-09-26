import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';

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

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.getClientes().subscribe((data: any[]) => {
      this.clientes = data;
    });
  }

  onSubmit() {
    if (this.isEditing) {
      this.clienteService.updateCliente(this.selectedCliente.id, this.clienteForm.value).subscribe(() => {
        this.loadClientes();
        this.resetForm();
      });
    } else {
      this.clienteService.createCliente(this.clienteForm.value).subscribe(() => {
        this.loadClientes();
        this.resetForm();
      });
    }
  }

  editCliente(cliente: any) {
    this.isEditing = true;
    this.selectedCliente = cliente;
    this.clienteForm.patchValue(cliente);
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id).subscribe(() => {
      this.loadClientes();
    });
  }

  resetForm() {
    this.clienteForm.reset();
    this.isEditing = false;
    this.selectedCliente = null;
  }
}
