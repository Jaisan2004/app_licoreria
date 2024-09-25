package co.edu.ue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import co.edu.ue.model.Categoria;

public interface ICategoria extends JpaRepository<Categoria, Integer>{

}
