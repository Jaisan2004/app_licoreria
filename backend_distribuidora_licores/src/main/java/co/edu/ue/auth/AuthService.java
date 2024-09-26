package co.edu.ue.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import co.edu.ue.jwt.JwtService;
import co.edu.ue.repository.IUsuario;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
	
	@Autowired
	JwtService jwtService;
	
	@Autowired
	IUsuario usuario;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	public AuthResponse login(LoginRequest request) {
		System.out.println("el metodo login recibe: " + request.getEmail());
		try {
		    Authentication authentication = authenticationManager.authenticate(
		        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		    System.out.println("Autenticación exitosa: " + authentication.isAuthenticated());
		} catch (Exception e) {
		    System.out.println("Error durante la autenticación: " + e.getMessage());
		    e.printStackTrace();
		}
		UserDetails user = usuario.findByUsuEmail(request.getEmail());
		
		String token = jwtService.getToken(user);
		System.out.println(token);
		AuthResponse auth = new AuthResponse(token);
		System.out.println(auth);
		return auth;
	}

}
