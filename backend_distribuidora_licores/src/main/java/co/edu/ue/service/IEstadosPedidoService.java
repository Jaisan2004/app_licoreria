package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.EstadosPedido;


public interface IEstadosPedidoService {
	
	List<EstadosPedido> getEstadosPedido();
	EstadosPedido postEstadosPedido(EstadosPedido estado);
	EstadosPedido updateEstadosPedido(EstadosPedido estado);
	EstadosPedido getEstadosPedidoById(Integer id);

}
