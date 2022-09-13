import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
        :host ::ng-deep .p-password input {
            width: 18rem
        }
    `],
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isLogged: boolean = false;
  usuarioLogeado?: string;
  displayLogin: boolean = false;

  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
