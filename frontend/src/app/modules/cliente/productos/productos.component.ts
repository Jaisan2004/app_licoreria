import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  // Cargar los productos disponibles
  loadProductos(): void {
    this.productosService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }

  // Añadir producto al carrito
  agregarAlCarrito(producto: Producto): void {
    this.productosService.addProductoCarrito(producto).subscribe(() => {
      alert(`Añadido ${producto.nombre} al carrito`);
    });
  }
}
