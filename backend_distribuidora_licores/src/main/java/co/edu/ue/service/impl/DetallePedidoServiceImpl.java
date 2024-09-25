package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.DetallesPedido;
import co.edu.ue.repository.IDetallesPedido;
import co.edu.ue.service.IDetallePedidoService;

@Service
public class DetallePedidoServiceImpl implements IDetallePedidoService{

	@Autowired
	IDetallesPedido detalles;
	
	@Override
	public List<DetallesPedido> getDetalle() {
		return detalles.findAll();
	}

	@Override
	public DetallesPedido postDetalle(DetallesPedido detalle) {
		return detalles.save(detalle);
	}

	@Override
	public DetallesPedido updateDetalle(DetallesPedido detalle) {
		return detalles.save(detalle);
	}

	@Override
	public void deleteDetalle(Integer id) {
		detalles.deleteById(id);
		
	}

	@Override
	public DetallesPedido getDetalleById(Integer id) {
		return detalles.findById(id).orElse(null);
	}

}
