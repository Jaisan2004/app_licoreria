package co.edu.ue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import co.edu.ue.model.Usuario;

public interface IUsuario extends JpaRepository<Usuario, Integer>{
	
	public Usuario findByUsuEmail(String email);

}
