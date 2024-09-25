package co.edu.ue.service;

import java.util.List;

import co.edu.ue.model.Producto;


public interface IProductoService {
	
	List<Producto> getProducto();
	Producto postProducto(Producto producto);
	Producto updateProducto(Producto producto);
	void deleteProducto(Integer id);
	Producto getProductoById(Integer id);

}
