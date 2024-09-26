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

import co.edu.ue.model.DetallesPedido;
import co.edu.ue.service.IDetallePedidoService;

@RestController
@RequestMapping("/DetallesPedido")
public class DetallesPedidoController {
	
	@Autowired
	IDetallePedidoService _detalleService;
	
	@GetMapping
	public ResponseEntity<List<DetallesPedido>> getDetalle(){
		List<DetallesPedido> det = _detalleService.getDetalle();
		return new ResponseEntity<List<DetallesPedido>>(det, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<DetallesPedido> postDetalle(@RequestBody DetallesPedido detalle){
		DetallesPedido det = _detalleService.postDetalle(detalle);
		return new ResponseEntity<DetallesPedido>(det, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<DetallesPedido> updateDetalle(@RequestBody DetallesPedido detalle){
		DetallesPedido det = _detalleService.updateDetalle(detalle);
		return new ResponseEntity<DetallesPedido>(det, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<DetallesPedido> getDetalleById(@PathVariable Integer id) throws Exception{
		DetallesPedido det = _detalleService.getDetalleById(id);
		if(det == null) {
			throw new Exception("No se encontro ID");
		}
		return new ResponseEntity<DetallesPedido>(det, HttpStatus.OK);
	}
}
