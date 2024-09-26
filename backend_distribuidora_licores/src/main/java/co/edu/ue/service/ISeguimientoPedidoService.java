package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.SeguimientoPedido;

public interface ISeguimientoPedidoService {
	
	List<SeguimientoPedido> getSeguimientoPedido();
	SeguimientoPedido postSeguimientoPedido(SeguimientoPedido seguimiento);
	SeguimientoPedido updateSeguimientoPedido(SeguimientoPedido seguimiento);
	SeguimientoPedido getSeguimientoPedidoById(Integer id);

}
