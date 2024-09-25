import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-cliente',
  templateUrl: './agregar-editar-cliente.component.html'
})
export class AgregarEditarClienteComponent implements OnInit {
  cliente = { nombre: '', email: '' };
  editMode = false;
  id: number | null = null;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.editMode = true;
      this.clienteService.getCliente(this.id).subscribe(data => {
        this.cliente = data;
      });
    }
  }

  saveCliente() {
    if (this.editMode) {
      this.clienteService.updateCliente(this.id!, this.cliente).subscribe(() => {
        this.router.navigate(['/admin/clientes']);
      });
    } else {
      this.clienteService.createCliente(this.cliente).subscribe(() => {
        this.router.navigate(['/admin/clientes']);
      });
    }
  }
}
