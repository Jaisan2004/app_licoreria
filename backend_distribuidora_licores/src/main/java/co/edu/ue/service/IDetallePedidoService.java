package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.DetallesPedido;

public interface IDetallePedidoService {
	
	List<DetallesPedido> getDetalle();
	DetallesPedido postDetalle(DetallesPedido detalle);
	DetallesPedido updateDetalle(DetallesPedido detalle);
	DetallesPedido getDetalleById(Integer id);

}
