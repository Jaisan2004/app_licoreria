package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.Categoria;

public interface ICategoriaService {
	
	List<Categoria> getCategoria();
	Categoria postCategoria(Categoria categoria);
	Categoria updateCategoria(Categoria categoria);
	Categoria getCategoriaById(Integer id);

}
