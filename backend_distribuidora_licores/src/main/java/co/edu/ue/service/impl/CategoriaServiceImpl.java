package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.Categoria;
import co.edu.ue.repository.ICategoria;
import co.edu.ue.service.ICategoriaService;

@Service
public class CategoriaServiceImpl implements ICategoriaService{
	
	@Autowired
	ICategoria repo;

	@Override
	public List<Categoria> getCategoria() {
		return repo.findAll();
	}

	@Override
	public Categoria postCategoria(Categoria categoria) {
		return repo.save(categoria);
	}

	@Override
	public Categoria updateCategoria(Categoria categoria) {
		return repo.save(categoria);
	}

	@Override
	public void deleteCategoria(Integer id) {
		repo.deleteById(id);
		
	}

	@Override
	public Categoria getCategoriaById(Integer id) {
		return repo.findById(id).orElse(null);
	}
	

}
