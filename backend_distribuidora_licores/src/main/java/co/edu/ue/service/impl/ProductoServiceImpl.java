package co.edu.ue.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.ue.model.Producto;
import co.edu.ue.repository.IProducto;
import co.edu.ue.service.IProductoService;

@Service
public class ProductoServiceImpl implements IProductoService{
	
	@Autowired
	IProducto productos;

	@Override
	public List<Producto> getProducto() {
		return productos.findAll();
	}

	@Override
	public Producto postProducto(Producto producto) {
		return productos.save(producto);
	}

	@Override
	public Producto updateProducto(Producto producto) {
		return productos.save(producto);
	}

	@Override
	public Producto getProductoById(Integer id) {
		return productos.findById(id).orElse(null);
	}

}
