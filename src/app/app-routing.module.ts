import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloquesComponent } from './componentes/bloques/bloques.component';
import { BloqueoComponent } from './componentes/cuentas/bloqueo/bloqueo.component';
import { MantenimientoComponent } from './componentes/cuentas/mantenimiento/mantenimiento.component';
import { RegistroComponent } from './componentes/cuentas/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CuentasBaneosComponent } from './dash/cuentas-baneos/cuentas-baneos.component';
import { CuentasGeneralesComponent } from './dash/cuentas-generales/cuentas-generales.component';
import { ProdGuardService } from './guards/prod-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dash/cuentas-bloqueo', component: CuentasBaneosComponent, canActivate: [ProdGuardService], data: { expectedRol: ['mantenimiento', 'produccion', 'supervisor'] } },
  { path: 'dash/cuentas-generales', component: CuentasGeneralesComponent, canActivate: [ProdGuardService], data: { expectedRol: ['supervisor'] } },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ProdGuardService], data: { expectedRol: ['mantenimiento', 'produccion', 'supervisor'] } },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [ProdGuardService], data: { expectedRol: ['supervisor'] } },
  { path: 'cuentas/registro', component: RegistroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['supervisor'] } },
  { path: 'cuentas/mantenimiento', component: MantenimientoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['mantenimiento'] } },
  { path: 'cuentas/bloqueo', component: BloqueoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['produccion'] } },
  { path: 'bloques', component: BloquesComponent, canActivate: [ProdGuardService], data: { expectedRol: ['supervisor'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

