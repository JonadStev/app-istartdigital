import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.component.html',
  styleUrls: ['./bloques.component.scss']
})
export class BloquesComponent implements OnInit {

  estados: any[] = [{ id: 1, nombreEstado: 'ACTIVO' }, { id: 2, nombreEstado: 'INACTIVO' }];
  selectedEstado?: string = '';

  bloques: any;

  constructor() { }

  ngOnInit(): void {
  }

  onRowSelectBloque(event: any) {
    console.log(event);
  }

  onRowUnselectBloque(event: any) {
    console.log(event);
  }

}
