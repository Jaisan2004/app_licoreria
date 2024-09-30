import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: Producto[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.loadCarrito();
  }

  // Cargar los productos del carrito
  loadCarrito(): void {
    this.carritoService.getCarrito().subscribe((data: Producto[]) => {
      this.productosEnCarrito = data;
    });
  }

  // Eliminar producto del carrito
  eliminarDelCarrito(producto: Producto): void {
    this.carritoService.removeProductoCarrito(producto.id).subscribe(() => {
      this.loadCarrito();
    });
  }

  // Calcular el total del carrito
  calcularTotal(): number {
    return this.productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
  }

  // Procesar la compra
  procesarCompra(): void {
    this.carritoService.procesarCompra().subscribe(() => {
      alert('Compra procesada');
      this.loadCarrito(); // Limpiar el carrito después de la compra
    });
  }
}

