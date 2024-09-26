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

import co.edu.ue.model.Direccione;
import co.edu.ue.service.IDireccioneService;

@RestController
@RequestMapping("/Direcciones")
public class DireccioneController {

	@Autowired
	IDireccioneService _direccionesService;
	
	@GetMapping
	public ResponseEntity<List<Direccione>> getDirecciones(){
		List<Direccione> dir = _direccionesService.getDirecciones();
		return new ResponseEntity<List<Direccione>>(dir, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Direccione> postDirecciones(@RequestBody Direccione direccion){
		Direccione dir = _direccionesService.postDirecciones(direccion);
		return new ResponseEntity<Direccione>(dir, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<Direccione> updateDirecciones(@RequestBody Direccione direccion){
		Direccione dir = _direccionesService.updateDirecciones(direccion);
		return new ResponseEntity<Direccione>(dir, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Direccione> getDireccionesById(@PathVariable Integer id) throws Exception{
		Direccione dir = _direccionesService.getDireccionesById(id);
		if(dir == null) {
			throw new Exception("No se encontro ID");
		}
		return new ResponseEntity<Direccione>(dir, HttpStatus.OK);
	}
}
