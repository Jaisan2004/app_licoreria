import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../../../services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-proveedores',
  templateUrl: './listar-proveedores.component.html'
})
export class ListarProveedoresComponent implements OnInit {
  proveedores: any[] = [];

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void {
    this.loadProveedores();
  }

  loadProveedores() {
    this.proveedorService.getProveedores().subscribe(data => {
      this.proveedores = data;
    });
  }

  editProveedor(id: number) {
    this.router.navigate([`/admin/proveedores/editar/${id}`]);
  }

  deleteProveedor(id: number) {
    if (confirm('¿Estás seguro de eliminar este proveedor?')) {
      this.proveedorService.deleteProveedor(id).subscribe(() => {
        this.loadProveedores();
      });
    }
  }
}
