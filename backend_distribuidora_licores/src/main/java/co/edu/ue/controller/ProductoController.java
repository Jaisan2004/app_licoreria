package co.edu.ue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.ue.model.Producto;
import co.edu.ue.service.IProductoService;

@RestController
@RequestMapping("/Productos")
public class ProductoController {
	
	@Autowired
	IProductoService _productoService;
	@GetMapping
	public ResponseEntity<List<Producto>> getProducto(){
		List<Producto> prod = _productoService.getProducto();
		return new ResponseEntity<List<Producto>>(prod, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Producto> postProducto(@RequestBody Producto pedido){
		Producto prod = _productoService.postProducto(pedido);
		return new ResponseEntity<Producto>(prod, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<Producto> updateProducto(@RequestBody Producto pedido){
		Producto prod = _productoService.updateProducto(pedido);
		return new ResponseEntity<Producto>(prod, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Producto> getProductoById(@PathVariable Integer id) throws Exception{
		Producto prod = _productoService.getProductoById(id);
		if(prod == null) {
			throw new Exception("No se encontro ID");
		}
		return new ResponseEntity<Producto>(prod, HttpStatus.OK);
	}

}
