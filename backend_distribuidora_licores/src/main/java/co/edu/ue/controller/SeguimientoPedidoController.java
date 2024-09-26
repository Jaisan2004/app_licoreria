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

import co.edu.ue.model.SeguimientoPedido;
import co.edu.ue.service.ISeguimientoPedidoService;

@RestController
@RequestMapping("/Seguimiento")
public class SeguimientoPedidoController {
	
	@Autowired
	ISeguimientoPedidoService _seguimientoService;
	@GetMapping
	public ResponseEntity<List<SeguimientoPedido>> getSeguimiento(){
		List<SeguimientoPedido> seg = _seguimientoService.getSeguimientoPedido();
		return new ResponseEntity<List<SeguimientoPedido>>(seg, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<SeguimientoPedido> postSeguimiento(@RequestBody SeguimientoPedido pedido){
		SeguimientoPedido seg = _seguimientoService.postSeguimientoPedido(pedido);
		return new ResponseEntity<SeguimientoPedido>(seg, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<SeguimientoPedido> updateSeguimiento(@RequestBody SeguimientoPedido pedido){
		SeguimientoPedido seg = _seguimientoService.updateSeguimientoPedido(pedido);
		return new ResponseEntity<SeguimientoPedido>(seg, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<SeguimientoPedido> getSeguimientoById(@PathVariable Integer id) throws Exception{
		SeguimientoPedido seg = _seguimientoService.getSeguimientoPedidoById(id);
		if(seg == null) {
			throw new Exception("No se encontro ID");
		}
		return new ResponseEntity<SeguimientoPedido>(seg, HttpStatus.OK);
	}

}
