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

import co.edu.ue.model.Usuario;
import co.edu.ue.service.IUsuarioService;

@RestController
@RequestMapping("/Usuario")
public class UsuarioController {
	
	@Autowired
	IUsuarioService _usuarioService;
	@GetMapping
	public ResponseEntity<List<Usuario>> getUsuario(){
		List<Usuario> user = _usuarioService.getUsuarios();
		return new ResponseEntity<List<Usuario>>(user, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario usuario){
		Usuario user = _usuarioService.updateUsuario(usuario);
		return new ResponseEntity<Usuario>(user, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUsuario(@PathVariable Integer id) throws Exception {
		Usuario user = _usuarioService.getUsuarioById(id);
		if(user == null) {
			throw new Exception("No se encontro ID");
		}
		_usuarioService.deleteUsuario(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping(value="ById/{id}")
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable Integer id) throws Exception{
		Usuario user = _usuarioService.getUsuarioById(id);
		if(user == null) {
			throw new Exception("No se encontro ID");
		}
		return new ResponseEntity<Usuario>(user, HttpStatus.OK);
	}
	
	@GetMapping(value="ByEmail/{email}")
	public ResponseEntity<Usuario> getUsuarioByEmail(@PathVariable String email) throws Exception{
		Usuario user = _usuarioService.getUsuarioByEmail(email);
		if(user == null) {
			throw new Exception("No se encontro correo");
		}
		return new ResponseEntity<Usuario>(user, HttpStatus.OK);
	}

}
