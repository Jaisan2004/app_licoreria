package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.Usuario;
import co.edu.ue.repository.IUsuario;
import co.edu.ue.service.IUsuarioService;

@Service
public class UsuarioServiceImpl implements IUsuarioService{
	
	@Autowired
	IUsuario usuarios;

	@Override
	public List<Usuario> getUsuarios() {
		return usuarios.findAll();
	}

	@Override
	public Usuario postUsuario(Usuario usuario) {
		return usuarios.save(usuario);
	}

	@Override
	public Usuario updateUsuario(Usuario usuario) {
		return usuarios.save(usuario);
	}

	@Override
	public Usuario getUsuarioById(Integer id) {
		return usuarios.findById(id).orElse(null);
	}

	@Override
	public Usuario getUsuarioByEmail(String email) {
		return usuarios.findByUsuEmail(email);
	}

}
