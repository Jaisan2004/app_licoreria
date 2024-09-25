import { Component, OnInit } from '@angular/core';
import { PqrsService } from '../../../../services/pqrs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pqrs',
  templateUrl: './listar-pqrs.component.html'
})
export class ListarPqrsComponent implements OnInit {
  pqrs: any[] = [];

  constructor(private pqrsService: PqrsService, private router: Router) { }

  ngOnInit(): void {
    this.loadPqrs();
  }

  loadPqrs() {
    this.pqrsService.getPqrs().subscribe(data => {
      this.pqrs = data;
    });
  }

  editPqrs(id: number) {
    this.router.navigate([`/admin/pqrs/editar/${id}`]);
  }

  deletePqrs(id: number) {
    if (confirm('¿Estás seguro de eliminar esta PQR?')) {
      this.pqrsService.deletePqr(id).subscribe(() => {
        this.loadPqrs();
      });
    }
  }
}
