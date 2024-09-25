package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.SeguimientoPedido;
import co.edu.ue.repository.ISeguimientoPedido;
import co.edu.ue.service.ISeguimientoPedidoService;

@Service
public class SeguimientoPedidoImpl implements ISeguimientoPedidoService{
	
	@Autowired
	ISeguimientoPedido seguimientos;

	@Override
	public List<SeguimientoPedido> getSeguimientoPedido() {
		return seguimientos.findAll();
	}

	@Override
	public SeguimientoPedido postSeguimientoPedido(SeguimientoPedido seguimiento) {
		return seguimientos.save(seguimiento);
	}

	@Override
	public SeguimientoPedido updateSeguimientoPedido(SeguimientoPedido seguimiento) {
		return seguimientos.save(seguimiento);
	}

	@Override
	public void deleteSeguimientoPedido(Integer id) {
		seguimientos.deleteById(id);
	}

	@Override
	public SeguimientoPedido getSeguimientoPedidoById(Integer id) {
		return seguimientos.findById(id).orElse(null);
	}

}
