import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../services/pedido.service';

interface Pedido {
  id: number;
  total: number;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.loadPedidos();
  }

  // Cargar los pedidos del cliente
  loadPedidos(): void {
    this.pedidoService.getPedidos().subscribe((data: Pedido[]) => {
      this.pedidos = data;
    });
  }

  // Ver detalles del pedido
  verDetalles(pedido: Pedido): void {
    this.pedidoService.getPedidoById(pedido.id).subscribe((detalles) => {
      console.log('Detalles del pedido:', detalles);
      alert(`Detalles del pedido #${pedido.id}`);
    });
  }
}
