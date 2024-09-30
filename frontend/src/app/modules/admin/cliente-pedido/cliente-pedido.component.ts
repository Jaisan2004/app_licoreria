import { Component, OnInit } from '@angular/core';
import { ClientePedidoService } from '../../../services/cliente-pedido.service';

@Component({
  selector: 'app-cliente-pedido',
  templateUrl: './cliente-pedido.component.html',
  styleUrls: ['./cliente-pedido.component.css']
})
export class ClientePedidoComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidoService: ClientePedidoService) { }

  ngOnInit(): void {
    this.loadPedidos();
  }

  loadPedidos(): void {
    this.pedidoService.getPedidos().subscribe((data) => {
      this.pedidos = data;
    });
  }

  deletePedido(id: number): void {
    this.pedidoService.deletePedido(id).subscribe(() => {
      this.loadPedidos();
    });
  }
}
