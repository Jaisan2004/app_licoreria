import { Component, OnInit } from '@angular/core';
import { ProductosCrudService } from '../../../services/productos-crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos-crud',
  templateUrl: './productos-crud.component.html',
  styleUrls: ['./productos-crud.component.css']
})
export class ProductosCrudComponent implements OnInit {
  productos: any[] = [];
  productoForm: FormGroup;
  isEditing = false;
  selectedProducto: any;

  constructor(private productosService: ProductosCrudService, private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      categoriaId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.productosService.updateProducto(this.selectedProducto.id, this.productoForm.value).subscribe(() => {
        this.loadProductos();
        this.resetForm();
      });
    } else {
      this.productosService.createProducto(this.productoForm.value).subscribe(() => {
        this.loadProductos();
        this.resetForm();
      });
    }
  }

  editProducto(producto: any): void {
    this.isEditing = true;
    this.selectedProducto = producto;
    this.productoForm.patchValue(producto);
  }

  deleteProducto(id: number): void {
    this.productosService.deleteProducto(id).subscribe(() => {
      this.loadProductos();
    });
  }

  resetForm(): void {
    this.isEditing = false;
    this.productoForm.reset();
    this.selectedProducto = null;
  }
}


