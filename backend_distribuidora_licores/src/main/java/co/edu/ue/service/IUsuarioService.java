package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.Usuario;

public interface IUsuarioService {
	
	List<Usuario> getUsuarios();
	Usuario postUsuario(Usuario usuario);
	Usuario updateUsuario(Usuario usuario);
	Usuario getUsuarioById(Integer id);
	Usuario getUsuarioByEmail(String email);

}
