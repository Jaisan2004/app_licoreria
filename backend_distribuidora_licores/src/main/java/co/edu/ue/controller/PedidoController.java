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

import co.edu.ue.model.Pedido;
import co.edu.ue.service.IPedidoService;

@RestController
@RequestMapping("/Pedidos")
public class PedidoController {
	
	@Autowired
	IPedidoService _pedidoService;
	
	@GetMapping
	public ResponseEntity<List<Pedido>> getPedidos(){
		List<Pedido> ped = _pedidoService.getPedido();
		return new ResponseEntity<List<Pedido>>(ped, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Pedido> postPedidos(@RequestBody Pedido pedido){
		Pedido ped = _pedidoService.postPedido(pedido);
		return new ResponseEntity<Pedido>(ped, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<Pedido> updatePedidos(@RequestBody Pedido pedido){
		Pedido ped = _pedidoService.updatePedido(pedido);
		return new ResponseEntity<Pedido>(ped, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePedidos(@PathVariable Integer id) throws Exception {
		Pedido ped = _pedidoService.getPedidoById(id);
		if(ped == null) {
			throw new Exception("No se encontro ID");
		}
		_pedidoService.deletePedido(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Pedido> getPedidosById(@PathVariable Integer id) throws Exception{
		Pedido ped = _pedidoService.getPedidoById(id);
		if(ped == null) {
			throw new Exception("No se encontro ID");
		}
		return new ResponseEntity<Pedido>(ped, HttpStatus.OK);
	}

}
