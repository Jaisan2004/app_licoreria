import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html'
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.loadCarrito();
  }

  loadCarrito() {
    this.carrito = this.carritoService.getCarrito();
    this.calculateTotal();
  }

  removeProducto(index: number) {
    this.carritoService.removeProducto(index);
    this.loadCarrito();
  }

  calculateTotal() {
    this.total = this.carrito.reduce((acc, producto) => acc + producto.precio, 0);
  }

  clearCarrito() {
    this.carritoService.clearCarrito();
    this.loadCarrito();
  }

  placeOrder() {
    // Aquí iría la lógica para realizar el pedido
    alert('Pedido realizado con éxito. ¡Gracias por su compra!');
    this.clearCarrito();
  }
}
