import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  estados: any[] = [{ id: 1, nombreEstado: 'ACTIVO' }, { id: 2, nombreEstado: 'INACTIVO' }];
  bloques: any[] = [{ id: 1, nombreEstado: 'BLOQUE_1' }, { id: 2, nombreEstado: 'BLOQUE_2' }];
  roles: any[] = [{ id: 1, nombre: "supervisor" }, { id: 2, nombre: "mantenimiento" }, { id: 2, nombre: "produccion" }];

  selectedRol?: string;
  selectedEstadoUsuario?: string;
  selectedBloque?: string;

  cuentas: any;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    console.log(event);
  }

  onRowSelectCuenta(event: any) {
    console.log(event);
  }

  onRowUnselectCuenta(event: any) {
    console.log(event);
  }

}
