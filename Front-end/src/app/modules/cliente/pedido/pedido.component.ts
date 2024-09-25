import { Component } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent {
  pedido = {
    nombre: '',
    direccion: '',
    telefono: ''
  };

  constructor(private carritoService: CarritoService) {}

  placeOrder() {
    const carrito = this.carritoService.getCarrito();
    if (carrito.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    // Aquí deberías enviar el pedido al backend para procesarlo
    console.log('Pedido:', this.pedido, 'Productos:', carrito);
    alert('Su pedido ha sido realizado con éxito.');
    this.carritoService.clearCarrito();
  }
}
