import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BloqueDto } from 'src/app/modelos/bloque';
import { BloquesService } from 'src/app/services/bloques.service';

@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.component.html',
  styleUrls: ['./bloques.component.scss']
})
export class BloquesComponent implements OnInit {

  estados: any[] = [{ id: 1, nombreEstado: 'ACTIVO' }, { id: 2, nombreEstado: 'INACTIVO' }];
  selectedEstado?: string = '';

  bloques: BloqueDto[] = [];

  bloque: BloqueDto = {};

  constructor(private messageService: MessageService, private bloqueService: BloquesService) { }

  ngOnInit(): void {
    this.llenarBloque();
  }

  llenarBloque() {
    this.bloqueService.getBloques().subscribe(data => {
      this.bloques = data;
    });
  }

  guardarEstado() {
    if (
      this.bloque.nombre === '' || this.bloque.nombre === null || this.bloque.nombre === undefined ||
      this.selectedEstado === '' || this.selectedEstado === null || this.selectedEstado === undefined
    ) {
      this.messageService.add({ key: 'myKey1', severity: 'info', summary: 'Información', detail: 'Debe llenar todos los campos.' });
      return;
    }
    this.bloque.estado = this.selectedEstado;
    this.bloqueService.guardarBloque(this.bloque).subscribe(data => {
      this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'Éxito', detail: 'El bloque ha sido guardado correctamente.' });
      this.llenarBloque();
      this.limpar();
    });
  }


  onRowSelectBloque(event: any) {
    this.bloque = event.data
    this.selectedEstado = event.data.estado;
  }

  onRowUnselectBloque(event: any) {
    this.limpar();
  }

  limpar() {
    this.bloque = {};
    this.selectedEstado = '';
  }

}
