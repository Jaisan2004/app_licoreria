package co.edu.ue.auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@PostMapping(value="login")
	public String login() {
		
		return "Login from public endpoint";
	}
	

}
