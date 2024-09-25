package co.edu.ue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.ue.model.Categoria;
import co.edu.ue.service.ICategoriaService;

@RestController
@RequestMapping("/Categoria")
public class CategoriaController {
	
	@Autowired
	private ICategoriaService _categoriaService;
	
	@GetMapping
	public ResponseEntity<List<Categoria>> getCategoria(){
		List<Categoria> categorias = _categoriaService.getCategoria();
		return new ResponseEntity<List<Categoria>>(categorias, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Categoria> postCategoria(@RequestBody Categoria categoria){
		Categoria categorias = _categoriaService.postCategoria(categoria);
		return new ResponseEntity<Categoria>(categorias, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<Categoria> updateCategoria(@RequestBody Categoria categoria){
		Categoria categorias = _categoriaService.updateCategoria(categoria);
		return new ResponseEntity<Categoria>(categorias, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCategoria(@PathVariable Integer id) throws Exception {
		Categoria cate = _categoriaService.getCategoriaById(id);
		if(cate == null) {
			throw new Exception("No se encontro ID");
		}
		_categoriaService.deleteCategoria(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Categoria> getCategoriaById(@PathVariable Integer id) throws Exception{
		Categoria cate = _categoriaService.getCategoriaById(id);
		if(cate == null) {
			throw new Exception("No se encontro ID");
		}
		_categoriaService.getCategoriaById(id);
		return new ResponseEntity<Categoria>(cate, HttpStatus.OK);
	}

}
