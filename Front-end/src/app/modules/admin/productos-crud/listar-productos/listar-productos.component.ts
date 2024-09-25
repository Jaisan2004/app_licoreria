import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html'
})
export class ListarProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  editProducto(id: number) {
    this.router.navigate([`/admin/productos/editar/${id}`]);
  }

  deleteProducto(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.deleteProducto(id).subscribe(() => {
        this.loadProductos();
      });
    }
  }
}
