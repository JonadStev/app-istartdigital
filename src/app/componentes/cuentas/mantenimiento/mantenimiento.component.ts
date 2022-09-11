import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  bloques: any[] = [{ id: 1, nombreEstado: 'BLOQUE_1' }, { id: 2, nombreEstado: 'BLOQUE_2' }];
  selectedBloque?: string;

  mantenimientos: any;

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
