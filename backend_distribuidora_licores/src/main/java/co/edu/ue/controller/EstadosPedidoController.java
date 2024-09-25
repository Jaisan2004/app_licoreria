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

import co.edu.ue.model.EstadosPedido;
import co.edu.ue.service.IEstadosPedidoService;

@RestController
@RequestMapping("/Estados")
public class EstadosPedidoController {
	
	@Autowired
	IEstadosPedidoService _estadoSevice;
	
	@GetMapping
	public ResponseEntity<List<EstadosPedido>> getEstado(){
		List<EstadosPedido> est = _estadoSevice.getEstadosPedido();
		return new ResponseEntity<List<EstadosPedido>>(est, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<EstadosPedido> postEstado(@RequestBody EstadosPedido pedido){
		EstadosPedido est = _estadoSevice.postEstadosPedido(pedido);
		return new ResponseEntity<EstadosPedido>(est, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<EstadosPedido> updateEstado(@RequestBody EstadosPedido pedido){
		EstadosPedido est = _estadoSevice.updateEstadosPedido(pedido);
		return new ResponseEntity<EstadosPedido>(est, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteEstado(@PathVariable Integer id) throws Exception {
		EstadosPedido est = _estadoSevice.getEstadosPedidoById(id);
		if(est == null) {
			throw new Exception("No se encontro ID");
		}
		_estadoSevice.deleteEstadosPedido(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EstadosPedido> getEstadoById(@PathVariable Integer id) throws Exception{
		EstadosPedido est = _estadoSevice.getEstadosPedidoById(id);
		if(est == null) {
			throw new Exception("No se encontro ID");
		}
		return new ResponseEntity<EstadosPedido>(est, HttpStatus.OK);
	}

}
