package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.Direccione;

public interface IDireccioneService {
	
	List<Direccione> getDirecciones();
	Direccione postDirecciones(Direccione direccion);
	Direccione updateDirecciones(Direccione direccion);
	Direccione getDireccionesById(Integer id);

}
