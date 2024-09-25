import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

  constructor() { }

  addProducto(producto: any) {
    this.carrito.push(producto);
  }

  getCarrito() {
    return this.carrito;
  }

  removeProducto(index: number) {
    this.carrito.splice(index, 1);
  }

  clearCarrito() {
    this.carrito = [];
  }
}
