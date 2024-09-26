package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.Pedido;

public interface IPedidoService {
	
	List<Pedido> getPedido();
	Pedido postPedido(Pedido pedido);
	Pedido updatePedido(Pedido pedido);
	Pedido getPedidoById(Integer id);

}
