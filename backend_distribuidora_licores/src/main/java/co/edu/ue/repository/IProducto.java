package co.edu.ue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import co.edu.ue.model.Producto;

public interface IProducto extends JpaRepository<Producto, Integer>{

}
