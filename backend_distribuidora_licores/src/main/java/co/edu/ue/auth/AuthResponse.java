package co.edu.ue.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
	
	String token;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}


	public AuthResponse(String token) {
		this.token = token;
	}

	public AuthResponse() {
	}

	@Override
	public String toString() {
		return "AuthResponse [token=" + token + "]";
	}
}
