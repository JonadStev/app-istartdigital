import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloqueo',
  templateUrl: './bloqueo.component.html',
  styleUrls: ['./bloqueo.component.scss']
})
export class BloqueoComponent implements OnInit {

  bloques: any[] = [{ id: 1, nombreEstado: 'BLOQUE_1' }, { id: 2, nombreEstado: 'BLOQUE_2' }];
  selectedBloque?: string;

  bloqueos: any;

  constructor() { }

  ngOnInit(): void {
  }

  onRowSelectBloqueo(event: any) {
    console.log(event);
  }

  onRowUnselectBloqueo(event: any) {
    console.log(event);
  }

}
