package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.Categoria;

public interface ICategoriaService {
	
	List<Categoria> getCategoria();
	Categoria postCategoria(Categoria categoria);
	Categoria updateCategoria(Categoria categoria);
	void deleteCategoria(Integer id);
	Categoria getCategoriaById(Integer id);

}
