import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { CarritoService } from '../../../services/carrito.service'; // Servicio para manejar el carrito

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productoService: ProductoService, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  addToCart(product: any) {
    this.carritoService.addProducto(product);
    alert(`${product.nombre} ha sido añadido al carrito.`);
  }
}
