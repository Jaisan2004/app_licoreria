package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.Direccione;
import co.edu.ue.repository.IDireccione;
import co.edu.ue.service.IDireccioneService;

@Service
public class DireccioneServiceImpl implements IDireccioneService{
	
	@Autowired
	IDireccione direcciones;

	@Override
	public List<Direccione> getDirecciones() {
		return direcciones.findAll();
	}

	@Override
	public Direccione postDirecciones(Direccione direccion) {
		return direcciones.save(direccion);
	}

	@Override
	public Direccione updateDirecciones(Direccione direccion) {
		return direcciones.save(direccion);
	}

	@Override
	public void deleteDirecciones(Integer id) {
		direcciones.deleteById(id);
	}

	@Override
	public Direccione getDireccionesById(Integer id) {
		return direcciones.findById(id).orElse(null);
	}

}
