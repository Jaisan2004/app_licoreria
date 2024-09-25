package co.edu.ue.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	public SecurityFilterChain securityFilterChain(HttpSecurity http) {
		return http
				.authorizeHttpRequests(authRequest ->
				authRequest
				.requestMatchers("/auth/**").permitAll()
				.anyRequest().authenticated()
				).formLogin(withDefaults())
				.build();
	}

}
