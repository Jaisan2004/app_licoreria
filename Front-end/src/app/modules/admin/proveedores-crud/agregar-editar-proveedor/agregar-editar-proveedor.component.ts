import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../../../services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-proveedor',
  templateUrl: './agregar-editar-proveedor.component.html'
})
export class AgregarEditarProveedorComponent implements OnInit {
  proveedor = { nombre: '', empresa: '', email: '' };
  editMode = false;
  id: number | null = null;

  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.editMode = true;
      this.proveedorService.getProveedor(this.id).subscribe(data => {
        this.proveedor = data;
      });
    }
  }

  saveProveedor() {
    if (this.editMode) {
      this.proveedorService.updateProveedor(this.id!, this.proveedor).subscribe(() => {
        this.router.navigate(['/admin/proveedores']);
      });
    } else {
      this.proveedorService.createProveedor(this.proveedor).subscribe(() => {
        this.router.navigate(['/admin/proveedores']);
      });
    }
  }
}
