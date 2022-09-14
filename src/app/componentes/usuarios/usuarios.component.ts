import { Component, OnInit } from '@angular/core';


export interface UsuariosDto {
  id?: number;
  nombres?: string;
  apellidos?: string;
  correo?: string;
  contacto?: string;
  password?: string;
  estado?: string;
}

const ELEMENT_DATA: UsuariosDto[] = [
  { id: 1, nombres: 'Alberto', apellidos: 'Cruz', correo: 'acruz@gmail.com', contacto: '0987656765', password: 'asdfqw', estado: 'ACTIVO' },
  { id: 2, nombres: 'Jorge', apellidos: 'Zapata', correo: 'jzapata@gmail.com', contacto: '0987656761', password: 'asdfqw', estado: 'ACTIVO' },
  { id: 3, nombres: 'Susana', apellidos: 'Gallardo', correo: 'sgallardo@gmail.com', contacto: '0987656762', password: 'asdf2w', estado: 'ACTIVO' },
  { id: 4, nombres: 'Michelle', apellidos: 'Perez', correo: 'mperez@gmail.com', contacto: '0987656763', password: 'fasess', estado: 'ACTIVO' },
  { id: 5, nombres: 'Steven', apellidos: 'Burgos', correo: 'sburgos@gmail.com', contacto: '0987656764', password: 'asdfas', estado: 'ACTIVO' }
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [`
      :host ::ng-deep .p-password input {
          width: 18rem
      }
  `],
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  estados: any[] = [{ id: 1, nombreEstado: 'ACTIVO' }, { id: 2, nombreEstado: 'INACTIVO' }];
  roles: any[] = [{ id: 1, nombre: "supervisor" }, { id: 2, nombre: "mantenimiento" }, { id: 2, nombre: "baneo" }];

  selectedRol?: string;
  selectedEstadoUsuario?: string;

  usuarios: any[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }


  onRowSelectUser(event: any) {
    console.log(event);
  }

  onRowUnselectUser(event: any) {
    console.log(event);
  }

}
