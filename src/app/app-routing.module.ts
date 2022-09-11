import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloquesComponent } from './componentes/bloques/bloques.component';
import { BloqueoComponent } from './componentes/cuentas/bloqueo/bloqueo.component';
import { MantenimientoComponent } from './componentes/cuentas/mantenimiento/mantenimiento.component';
import { RegistroComponent } from './componentes/cuentas/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cuentas/registro', component: RegistroComponent },
  { path: 'cuentas/mantenimiento', component: MantenimientoComponent },
  { path: 'cuentas/bloqueo', component: BloqueoComponent },
  { path: 'bloques', component: BloquesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

