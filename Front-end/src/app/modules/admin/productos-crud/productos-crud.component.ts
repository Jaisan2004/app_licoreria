import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-productos-crud',
  templateUrl: './productos-crud.component.html'
})
export class ProductosCrudComponent implements OnInit {
  productos: any[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  deleteProducto(id: number) {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id !== id);
    });
  }
}
