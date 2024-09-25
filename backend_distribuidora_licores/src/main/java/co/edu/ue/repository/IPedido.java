package co.edu.ue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import co.edu.ue.model.Pedido;

public interface IPedido extends JpaRepository<Pedido, Integer>{

}
