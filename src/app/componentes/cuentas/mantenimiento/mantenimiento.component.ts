import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  bloques: any[] = [{ id: 1, nombreEstado: 'BLOQUE_1' }, { id: 2, nombreEstado: 'BLOQUE_2' }];
  selectedBloque?: string;

  mantenimientos: any[] = [
    { id: 1, fechaInicial: '09/09/2022', fechaFinal: '09/09/2022', descripcion: 'Mantenimiento 01', tiempo: '15', responsable: 'Jose Sánchez' },
    { id: 1, fechaInicial: '08/09/2022', fechaFinal: '09/09/2022', descripcion: 'Mantenimiento 02', tiempo: '10', responsable: 'Jose Sánchez' },
    { id: 1, fechaInicial: '07/09/2022', fechaFinal: '09/09/2022', descripcion: 'Mantenimiento 03', tiempo: '5', responsable: 'Jose Sánchez' },
    { id: 1, fechaInicial: '06/09/2022', fechaFinal: '09/09/2022', descripcion: 'Mantenimiento 04', tiempo: '15', responsable: 'Jose Sánchez' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onRowSelectMan(event: any) {
    console.log(event);
  }

  onRowUnselectMan(event: any) {
    console.log(event);
  }

}
