package co.edu.ue.auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.ue.model.Usuario;
import co.edu.ue.service.IUsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	AuthService _authService;
	
	@Autowired
	IUsuarioService _usuarioService;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@PostMapping(value="login")
	public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
		AuthResponse response = _authService.login(request);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping(value="registro")
	public ResponseEntity<Usuario> postUsuario(@RequestBody Usuario usuario) throws Exception{
		Usuario usuarioLocal = _usuarioService.getUsuarioByEmail(usuario.getUsuEmail());
		if(usuarioLocal != null) {
			throw new Exception("Ya existe un usuario registrado con ese correo");
		}else {
			// Encripta la contraseña antes de guardar el usuario
            String encryptedPassword = passwordEncoder.encode(usuario.getUsuContrasena());
            usuario.setUsuContrasena(encryptedPassword);

            // Guarda el usuario con la contraseña encriptada
            usuarioLocal = _usuarioService.postUsuario(usuario);

            return new ResponseEntity<Usuario>(usuarioLocal, HttpStatus.OK);			
		}
	}
	

}
