import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';

@Component({
  selector: 'app-proveedores-crud',
  templateUrl: './proveedores-crud.component.html',
  styleUrls: ['./proveedores-crud.component.css']
})
export class ProveedoresCrudComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedores: any[] = [];
  isEditing = false;
  selectedProveedor: any;

  constructor(private fb: FormBuilder, private proveedoresService: ProveedoresService) {
    this.proveedorForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadProveedores();
  }

  loadProveedores() {
    this.proveedoresService.getProveedores().subscribe((data: any[]) => {
      this.proveedores = data;
    });
  }

  onSubmit() {
    if (this.isEditing) {
      this.proveedoresService.updateProveedor(this.selectedProveedor.id, this.proveedorForm.value).subscribe(() => {
        this.loadProveedores();
        this.resetForm();
      });
    } else {
      this.proveedoresService.createProveedor(this.proveedorForm.value).subscribe(() => {
        this.loadProveedores();
        this.resetForm();
      });
    }
  }

  editProveedor(proveedor: any) {
    this.isEditing = true;
    this.selectedProveedor = proveedor;
    this.proveedorForm.patchValue(proveedor);
  }

  deleteProveedor(id: number) {
    this.proveedoresService.deleteProveedor(id).subscribe(() => {
      this.loadProveedores();
    });
  }

  resetForm() {
    this.proveedorForm.reset();
    this.isEditing = false;
    this.selectedProveedor = null;
  }
}
