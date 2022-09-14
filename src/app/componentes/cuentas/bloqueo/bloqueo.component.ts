import { Component, OnInit } from '@angular/core';
import { BloqueDto } from 'src/app/modelos/bloque';
import { CuentaDto } from 'src/app/modelos/cuenta';
import { BloquesService } from 'src/app/services/bloques.service';

@Component({
  selector: 'app-bloqueo',
  templateUrl: './bloqueo.component.html',
  styleUrls: ['./bloqueo.component.scss']
})
export class BloqueoComponent implements OnInit {

  selectedBloque?: string;
  selectedCuenta?: string;

  bloqueos: any[] = [
    { id: 1, usuario: 'jose.macias@gmail.com', esatadoR1: 'ACTIVO', fechaPrimeraRevision: '13/09/2022', esatadoR2: 'BLOQUEADA', fechaSegundaRevision: '13/09/2022', motivo: 'Falta de pago', dias: 2 },
    { id: 1, usuario: 'carlos.perez@gmail.com', esatadoR1: 'ACTIVO', fechaPrimeraRevision: '13/09/2022', esatadoR2: 'BLOQUEADA', fechaSegundaRevision: '13/09/2022', motivo: 'Falta de pago', dias: 7 },
    { id: 1, usuario: 'jose.sanchez@gmail.com', esatadoR1: 'ACTIVO', fechaPrimeraRevision: '13/09/2022', esatadoR2: 'BLOQUEADA', fechaSegundaRevision: '13/09/2022', motivo: 'Falta de pago', dias: 4 },
    { id: 1, usuario: 'carlos.calle@gmail.com', esatadoR1: 'ACTIVO', fechaPrimeraRevision: '13/09/2022', esatadoR2: 'BLOQUEADA', fechaSegundaRevision: '13/09/2022', motivo: 'Falta de pago', dias: 8 },
  ];

  bloques: BloqueDto[] = [];
  cuentas?: CuentaDto[] = [];

  bloque: BloqueDto = {};

  constructor(private bloqueService: BloquesService) { }

  ngOnInit(): void {
    this.llenarBloques();
  }

  llenarBloques() {
    this.bloqueService.getBloques().subscribe(data => {
      this.bloques = data.filter(x => {
        return x.estado === 'ACTIVO';
      });
    });
  }

  llenarCuentas() {
    this.bloque = this.bloques.map(x => x).filter(b => b.id === this.selectedBloque).reduce(x => x);
    this.cuentas = this.bloque.cuentas;
  }

  onRowSelectBloqueo(event: any) {
    console.log(event);
  }

  onRowUnselectBloqueo(event: any) {
    console.log(event);
  }

}
