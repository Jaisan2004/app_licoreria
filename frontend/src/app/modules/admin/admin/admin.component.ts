import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  data: any;
  dataCliente: any;

  temp: any;

  columns: any[] = [
    { name: '#', prop: 'id_empleado' },
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Apellido', prop: 'apellido' },
    { name: 'Puesto de Trabajo', prop: 'puesto' },
    { name: 'Telefono', prop: 'telefono' },
    { name: 'Correo', prop: 'email' },
    { name: 'Dirección', prop: 'direccion' },
    { name: 'Contraseña', prop: 'contrasena' },
    { name: 'Status', prop: 'status' },

  ];


  pqrs_id: any;


  displayedColumns: string[] = ['#','Nombre',
    'Apellido',
    'Puesto de Trabajo',
    'Telefono',
    'Correo',
    'Dirección',
    'Contraseña',
    'Status',
    'Acciones'
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = "Registros por página";
      this.dataSource.paginator = this.paginator;
    }
  }
 /*
  ngOnInit(): void {
    this.getListUsuarios();
  }


 getListUsuarios() {
    this.spinner.show();
    this._usuariosService.getUsuarios().subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(data)
      this.temp = [...data];
      this.spinner.hide();
    },
    (e: HttpErrorResponse) =>{
      this._errorService.msjError(e);
      this.spinner.hide()
    });
  }
    */

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d: any) {
      return d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.dataSource.data = temp;
  }
}
