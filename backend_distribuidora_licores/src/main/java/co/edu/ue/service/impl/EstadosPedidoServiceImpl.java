package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.EstadosPedido;
import co.edu.ue.repository.IEstadosPedido;
import co.edu.ue.service.IEstadosPedidoService;

@Service
public class EstadosPedidoServiceImpl implements IEstadosPedidoService{
	
	@Autowired
	IEstadosPedido estados;

	@Override
	public List<EstadosPedido> getEstadosPedido() {
		return estados.findAll();
	}

	@Override
	public EstadosPedido postEstadosPedido(EstadosPedido estado) {
		return estados.save(estado);
	}

	@Override
	public EstadosPedido updateEstadosPedido(EstadosPedido estado) {
		return estados.save(estado);
	}

	@Override
	public void deleteEstadosPedido(Integer id) {
		estados.deleteById(id);
	}

	@Override
	public EstadosPedido getEstadosPedidoById(Integer id) {
		return estados.findById(id).orElse(null);
	}
	
	

}
