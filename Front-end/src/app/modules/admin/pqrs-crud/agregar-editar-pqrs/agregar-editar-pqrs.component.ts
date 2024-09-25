import { Component, OnInit } from '@angular/core';
import { PqrsService } from '../../../../services/pqrs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-pqrs',
  templateUrl: './agregar-editar-pqrs.component.html'
})
export class AgregarEditarPqrsComponent implements OnInit {
  pqr = { descripcion: '', fecha: '', estado: '' };
  editMode = false;
  id: number | null = null;

  constructor(
    private pqrsService: PqrsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.editMode = true;
      this.pqrsService.getPqr(this.id).subscribe(data => {
        this.pqr = data;
      });
    }
  }

  savePqr() {
    if (this.editMode) {
      this.pqrsService.updatePqr(this.id!, this.pqr).subscribe(() => {
        this.router.navigate(['/admin/pqrs']);
      });
    } else {
      this.pqrsService.createPqr(this.pqr).subscribe(() => {
        this.router.navigate(['/admin/pqrs']);
      });
    }
  }
}
