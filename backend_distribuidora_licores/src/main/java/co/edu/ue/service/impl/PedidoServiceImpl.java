package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.Pedido;
import co.edu.ue.repository.IPedido;
import co.edu.ue.service.IPedidoService;

@Service
public class PedidoServiceImpl implements IPedidoService{
	
	@Autowired
	IPedido pedidos;

	@Override
	public List<Pedido> getPedido() {
		return pedidos.findAll();
	}

	@Override
	public Pedido postPedido(Pedido pedido) {
		return pedidos.save(pedido);
	}

	@Override
	public Pedido updatePedido(Pedido pedido) {
		return pedidos.save(pedido);
	}

	@Override
	public Pedido getPedidoById(Integer id) {
		return pedidos.findById(id).orElse(null);
	}

}
