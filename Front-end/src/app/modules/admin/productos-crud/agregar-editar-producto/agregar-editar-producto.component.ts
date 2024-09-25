import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-producto',
  templateUrl: './agregar-editar-producto.component.html'
})
export class AgregarEditarProductoComponent implements OnInit {
  producto = { nombre: '', descripcion: '', precio: 0 };
  editMode = false;
  id: number | null = null;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.editMode = true;
      this.productoService.getProducto(this.id).subscribe(data => {
        this.producto = data;
      });
    }
  }

  saveProducto() {
    if (this.editMode) {
      this.productoService.updateProducto(this.id!, this.producto).subscribe(() => {
        this.router.navigate(['/admin/productos']);
      });
    } else {
      this.productoService.createProducto(this.producto).subscribe(() => {
        this.router.navigate(['/admin/productos']);
      });
    }
  }
}
