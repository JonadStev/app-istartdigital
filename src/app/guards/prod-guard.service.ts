import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class ProdGuardService implements CanActivate {

  realRol: string = "";

  constructor(
    private tokenService: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const expectedRol = route.data['expectedRol'];

    if (this.tokenService.isAdmin()) {
      this.realRol = 'supervisor';
    } else if (this.tokenService.isPerfilBloqueo()) {
      this.realRol = 'bloqueo';
    } else {
      this.realRol = 'mantenimiento';
    }

    if (!this.tokenService.isLogger() || expectedRol.indexOf(this.realRol) < 0) {
      window.location.replace('/');
      return false;
    }
    return true;
  }
}
